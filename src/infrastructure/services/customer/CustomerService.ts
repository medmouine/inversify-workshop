import { injectable } from 'inversify';
import { Customer } from '@/domain/customer/Customer';

@injectable()
export class CustomerService {
  public async getAllCustomers(): Promise<Customer[]> {
    return;
  }
}
