
import { fadeIn, fadeOut, zoomIn } from 'ng-animate';
import { Customer } from './../models/customer';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { trigger, transition, style, animate, useAnimation, state } from '@angular/animations';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styles: [
    `
    .green{
      background-color: green;
      width: 200px;
      height: 200px;
    }
    `
  ],
  animations: [
    trigger('fade', [
      transition('void => *', useAnimation(zoomIn)),
      transition('* => void', useAnimation(fadeOut))
    ]),
    trigger('openClosed', [
      state('closed', style({ width: '50px', backgroundColor: 'red' })),
      transition('open => closed', [
        animate('3s ease-out')]),
      transition('closed => open', [
        animate('3s ease-in')
      ])
    ])
  ]
})

export class CustomerFormComponent implements OnInit {

  customer: Customer;
  error = false;
  // state = 'closed';

  form = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    avatar: new FormControl(),
    comment: new FormControl()
  });

  constructor(private route: ActivatedRoute, private service: CustomerService) { }

  toggleState() {
    this.state = this.state === 'closed' ? 'open' : 'closed';
  }

  ngOnInit() {
    // Récupération de l'id du Customer sur la route
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.find(id).subscribe(customer => {
      this.customer = customer;
      this.form.patchValue(customer);
    });
  }

  public handleSubmit() {
    const customer: Customer = this.form.value;
    customer.id = this.customer.id;

    this.service.update(customer).subscribe(updatedCustomer => {
      console.log("Oups");
    },
      (httpError: HttpErrorResponse) => {
        console.log(httpError);
        if (httpError.status === 400 && httpError.error.violations) {
          // TODO afficher les erreurs
          httpError.error.violations.forEach(violation => {
            // const { propertyPath, message } = violation; // destructuring
            this.form.get(violation.propertyPath).setErrors({
              validation: violation.message
            });
          });
          return;
        }

        // TODO : Afficher une erreur générique
        this.error = true;
      });

  }

}
