import { Customer } from './customer';

export interface Invoice {

  id: number;
  title: string;
  sentAt: string;
  amount: number;
  status: string;
  customer?: Customer;
}
