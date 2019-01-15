import { Customer } from '@/domain/customer/Customer';
import { CustomerId } from '@/domain/customer/CustomerId';
import { CustomerCreationRequest } from '@/routes/requests/CustomerCreationRequest';
import { Book } from '@/domain/book/book/Book';
import { Borrow } from '@/domain/book/borrow/Borrow';

export interface CustomerRepository {
  getAllCustomers(): Promise<Customer[]>;
  getCustomer(customerId: CustomerId): Promise<Customer>;
  createCustomer(customerInfo: CustomerCreationRequest): Promise<Customer>;
  addPurchaseToCustomer(book: Book, customerId: CustomerId): Promise<void>;
  addBorrowToCustomer(borrow: Borrow): Promise<void>;
}
