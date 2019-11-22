import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-status',
  template: `
    <span class="badge badge-{{ status[value].color }}" [class.badge-pill]="rounded">
     {{ status[value].label }} <i class="fas {{ status[value].icon }}"></i>
    </span>
  `,
  styles: []
})
// <app-invoice-status value="PAID"></app-invoice-status>

export class InvoiceStatusComponent implements OnInit {

  @Input()
  value: string;

  @Input()
  rounded = false;

  status = {
    PAID: { label: 'Payée', color: 'success', icon: 'fa-check' },
    SENT: { label: 'Envoyée', color: 'info', icon: 'fa-envelope' },
    CANCELLED: { label: 'Annulée', color: 'danger', icon: 'fa-times' }
  };

  constructor() { }

  ngOnInit() {
  }

}
