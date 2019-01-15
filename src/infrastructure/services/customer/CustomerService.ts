import { inject, injectable } from 'inversify';
import { Customer } from '@/domain/customer/Customer';
import { CustomerId } from '@/domain/customer/CustomerId';
import { BookId } from '@/domain/book/book/BookId';
import { BorrowInterval } from '@/domain/book/borrow/BorrowInterval';
import { CustomerCreationRequest } from '@/routes/requests/CustomerCreationRequest';
import { CustomerRepository } from '@/domain/customer/CustomerRepository';
import { Book } from '@/domain/book/book/Book';
import { Borrow } from '@/domain/book/borrow/Borrow';
import { v4 as uuid } from 'uuid';
import { TYPES } from '@/constants/types';

@injectable()
export class CustomerService {

  @inject(TYPES.CustomerRepository)
  private readonly customerRepository: CustomerRepository;

  public async getAllCustomers(): Promise<Customer[]> {
    return await this.customerRepository.getAllCustomers();
  }

  public async getCustomer(id: CustomerId): Promise<Customer> {
    return await this.customerRepository.getCustomer(id);
  }

  public async createCustomer(customerInfo: CustomerCreationRequest): Promise<Customer> {
    try {
      return await this.customerRepository.createCustomer(customerInfo);
    } catch (err) {
      throw err;
    }
  }

  public async addPurchaseToCustomer(bookId: BookId, customerId: CustomerId): Promise<void> {
    // const book: Book = await this.bookRepository.getBook(bookId);
    // return await this.customerRepository.addPurchaseToCustomer(book, customerId);
  }

  public async addBorrowToCustomer(borrowInterval: BorrowInterval,
                                   customerId: CustomerId,
                                   bookId: BookId): Promise<void> {
    // const book: Book = await this.bookRepository.getBook(bookId);
    // const borrow: Borrow = new Borrow(uuid(), book, customerId, borrowInterval);
    // return await this.customerRepository.addBorrowToCustomer(borrow);
  }
}
