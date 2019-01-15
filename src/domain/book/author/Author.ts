import { Book } from '../book/Book';
import { AuthorId } from '@/domain/book/author/AuthorId';
import { BookId } from '@/domain/book/book/BookId';

export class Author {
  private readonly id: AuthorId;
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly books: BookId[];

  constructor(id: AuthorId, firstName: string, lastName: string, books: BookId[]) {
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

  public getBooks(): BookId[] {
    return this.books;
  }

  public addBook(bookId: BookId): void {
    this.books.push(bookId);
  }
}
