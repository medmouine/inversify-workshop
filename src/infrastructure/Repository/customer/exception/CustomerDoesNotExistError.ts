import { CustomerId } from '@/domain/customer/CustomerId';

export class CustomerDoesNotExistError extends Error {
  constructor(id: CustomerId) {
    super(`Customer with Id : ${id} does not exist`);
  }
}
