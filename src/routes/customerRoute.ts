import 'reflect-metadata';
import {
  controller,
  httpGet, httpPost, next, requestBody, requestParam, response,
} from 'inversify-express-utils';
import { CustomerService } from '@/infrastructure';
import { Container, inject } from 'inversify';
import { TYPES } from '@/constants/types';
import { Customer } from '@/domain/customer/Customer';
import { CustomerCreationRequest } from '@/routes/requests/CustomerCreationRequest';
import { CustomerId } from '@/domain/customer/CustomerId';
import { BookId } from '@/domain/book/book/BookId';
import * as express from 'express';
import { HttpStatus } from '@/routes/HttpStatus';
import { BorrowInterval } from '@/domain/book/borrow/BorrowInterval';

const BASE_ROUTE_URL: string = '/customer';

@controller(BASE_ROUTE_URL)
  class CustomerRoute {

  @inject(TYPES.CustomerService)
    private readonly customerService: CustomerService;

  @httpGet('/')
    public async getAllCustomers(): Promise<Customer[]> {
    return this.customerService.getAllCustomers();
  }

  @httpPost('/')
    public async createCustomer(@requestBody() customerRequest: CustomerCreationRequest, @response() res: express.Response): Promise<void> {
    try {
      const customer: Customer = await this.customerService.createCustomer(customerRequest);
      res.location(`${BASE_ROUTE_URL}/${customer.getId()}`).sendStatus(HttpStatus.CREATED);
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: err.message }).send();
    }
  }

  @httpGet('/:customerId')
    public async getCustomerById(@requestParam('customerId') customerId: string): Promise<Customer> {
    return this.customerService.getCustomer(CustomerId.fromString(customerId));
  }

  @httpPost('/customer/:customerId/purchase/:bookId')
    public async addPurchaseToCustomer(@requestParam('customerId') customerId: string,
                                       @requestParam('bookId') bookId: string,
                                       @response() res: express.Response) {
    try {
      this.customerService.addPurchaseToCustomer(BookId.fromString(bookId), CustomerId.fromString(customerId));
      res.sendStatus(HttpStatus.CREATED);
    } catch (err) {
      res.sendStatus(HttpStatus.BAD_REQUEST).json({ error: err.message });
    }
  }

  @httpPost('/customer/:customerId/borrow/:bookId')
    public async addBorrowToCustomer(@requestParam('customerId') customerId: string,
                                     @requestParam('bookId') bookId: string,
                                     @requestBody() borrowRequest: BorrowInterval,
                                     @response() res: express.Response) {
    try {
      this.customerService.addBorrowToCustomer(borrowRequest, CustomerId.fromString(customerId), BookId.fromString(bookId));
      res.sendStatus(HttpStatus.CREATED);
    } catch (err) {
      res.sendStatus(HttpStatus.BAD_REQUEST).json({ error: err.message });
    }
  }
}
