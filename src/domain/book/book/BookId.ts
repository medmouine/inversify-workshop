import { AbstractId } from '../../common/AbstractId';

export class BookId extends AbstractId<string> {

  public static fromString(value: string) {
    return new BookId(value);
  }

  constructor(value: string) {
    super(value);
  }

  public getStringValue(): string {
    return this.value;
  }
}
