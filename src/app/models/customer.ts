import { Invoice } from './invoice';

export interface Customer {

  id?: number;
  lastName: string;
  firstName: string;
  email: string;
  avatar: string;
  comment?: string;
  invoices: Invoice;
}
