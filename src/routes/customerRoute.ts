import 'reflect-metadata';
import {
    controller,
    httpGet,
} from 'inversify-express-utils';
import { CustomerService } from '@/infrastructure';
import { inject } from 'inversify';
import { TYPES } from '@/constants/types';
import { Customer } from '@/domain/customer/Customer';

const BASE_ROUTE_URL: string = '/customer';

@controller(BASE_ROUTE_URL)
export class CustomerRoute {

  @inject(TYPES.CustomerService)
  private readonly customerService: CustomerService;
  @httpGet('/')
    public async getAllCustomers(): Promise<Customer[]> {
    return this.customerService.getAllCustomers();
  }
}
