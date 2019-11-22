import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(amount: number, symbol: string = '€') {
    return (amount / 100).toLocaleString() + ' ' + symbol;
  }
}
