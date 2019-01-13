import { CustomerId } from './CustomerId';
import { Book } from '@/domain/book/book/Book';
import { Borrow } from '@/domain/book/borrow/Borrow';

export class Customer {
  private id: CustomerId;
  private firstName: string;
  private lastName: string;
  private email: string;
  private purchases: Book[];
  private borrows: Borrow[];
}
