import { CustomerRepository } from '@/domain/customer/CustomerRepository';
import { Borrow } from '@/domain/book/borrow/Borrow';
import { Book } from '@/domain/book/book/Book';
import { CustomerId } from '@/domain/customer/CustomerId';
import { CustomerCreationRequest } from '@/routes/requests/CustomerCreationRequest';
import { Customer } from '@/domain/customer/Customer';
import { injectable } from 'inversify';
import { v4 as uuid } from 'uuid';
import { EmailAlreadyInUseException } from '@/infrastructure/Repository/customer/exception/EmailAlreadyInUseException';
import { CustomerDoesNotExistError } from '@/infrastructure/Repository/customer/exception/CustomerDoesNotExistError';

@injectable()
export class InMemoryCustomerRepository implements CustomerRepository {

  private static readonly customers: Customer[] = [];

  public async addBorrowToCustomer(borrow: Borrow): Promise<void> {
    const customer: Customer = InMemoryCustomerRepository.customers.find(storedCustomer => borrow.getCustomerId().getStringValue() === storedCustomer.getId().getStringValue());
    if (!customer) {
      throw new CustomerDoesNotExistError(customer.getId());
    }

    customer.addBorrows(borrow);
  }

  public async addPurchaseToCustomer(book: Book, customerId: CustomerId): Promise<void> {
    const customer: Customer = InMemoryCustomerRepository.customers.find(storedCustomer => customerId.getStringValue() === storedCustomer.getId().getStringValue());
    if (!customer) {
      throw new CustomerDoesNotExistError(customerId);
    }

    customer.addBookToPurchases(book);
  }

  public async createCustomer(customerInfo: CustomerCreationRequest): Promise<Customer> {
    const customer: Customer = new Customer(new CustomerId(uuid()),
                                            customerInfo.firstName,
                                            customerInfo.lastName,
                                            customerInfo.email,
                                            [],
                                            []);
    if (!this.customerEmailAlreadyInUse(customer)) {
      InMemoryCustomerRepository.customers.push(customer);
      return customer;
    }

    throw new EmailAlreadyInUseException(customer.getEmail());
  }

  public async getAllCustomers(): Promise<Customer[]> {
    return InMemoryCustomerRepository.customers;
  }

  public async getCustomer(customerId: CustomerId): Promise<Customer> {
    return InMemoryCustomerRepository.customers.find(customer => customer.getId().getStringValue() === customerId.getStringValue());
  }

  private customerEmailAlreadyInUse(customer: Customer) {
    return InMemoryCustomerRepository.customers.some(storedCustomer => storedCustomer.getEmail() === customer.getEmail());
  }
}
