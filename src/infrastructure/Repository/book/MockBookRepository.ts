import { BookRepository } from '@/domain/book/book/BookRepository';
import { BookId } from '@/domain/book/book/BookId';
import { Book } from '@/domain/book/book/Book';
import { Money } from '@/domain/common/money/Money';
import { Currency } from '@/domain/common/money/Currency';
import { Author } from '@/domain/book/author/Author';
import { AuthorId } from '@/domain/book/author/AuthorId';
import { injectable } from 'inversify';

@injectable()
export class MockBookRepository implements BookRepository {
  public async getBook(bookId: BookId): Promise<Book> {
    return new Book(bookId,
                    '50 shades of grey',
                    new Author(new AuthorId('myAuthorId'),
                               'idk',
                               'idk',
                               [bookId]),
                    'description',
                    new Money(20, Currency.CAD),
                    new Money(2, Currency.CAD));
  }
}
