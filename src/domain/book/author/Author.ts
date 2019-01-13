import { Book } from '../book/Book';
import { AuthorId } from '@/domain/book/author/AuthorId';

export class Author {
  private readonly id: AuthorId;
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly books: Book[];

  constructor(id: AuthorId, firstName: string, lastName: string, books: Book[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.books = books;
  }

  public getId(): AuthorId {
    return this.id;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getBooks(): Book[] {
    return this.books;
  }

  public addBook(book: Book): void {
    this.books.push(book);
  }
}
