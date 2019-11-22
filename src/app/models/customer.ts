import { Invoice } from './invoice';

export interface Customer {

  firstName: string;
  lastName: string;
  id: number;
  email: string;
  avatar?: string;
  comment?: string;
  invoices: Invoice[];
  totalAmount: number;
}
