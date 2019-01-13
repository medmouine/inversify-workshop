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

  constructor(id: CustomerId,
              firstName: string,
              lastName: string,
              email: string,
              purchases: Book[],
              borrows: Borrow[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.purchases = purchases;
    this.borrows = borrows;
  }

  public getId(): CustomerId {
    return this.id;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPurchases (): Book[] {
    return this.purchases;
  }

  public getBorrows(): Borrow[] {
    return this.borrows;
  }
}
