import { BookId } from '@/domain/book/book/BookId';
import { Book } from '@/domain/book/book/Book';

export interface BookRepository {
  getBook(bookId: BookId): Promise<Book>;
}
