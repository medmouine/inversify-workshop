import { injectable } from 'inversify';
import { Customer } from '@/domain/customer/Customer';
import { CustomerId } from '@/domain/customer/CustomerId';
import { BookId } from '@/domain/book/book/BookId';
import { BorrowInterval } from '@/domain/book/borrow/BorrowInterval';
import { CustomerRequest } from '@/routes/requests/CustomerRequest';

@injectable()
export class CustomerService {
  public async getAllCustomers(): Promise<Customer[]> {
    return;
  }

  public async getCustomer(id: CustomerId): Promise<Customer> {
    return;
  }

  public async createCustomer(customerInfo: CustomerRequest): Promise<Customer> {
    return;
  }

  public async addPurchaseToCustomer(bookId: BookId, customerId: CustomerId): Promise<void> {
    return;
  }

  public async addBorrowToCustomer(borrowInformation: BorrowInterval,
                                   customerId: CustomerId,
                                   bookId: BookId): Promise<void> {
    return;
  }
}
