import { AbstractId } from '@/domain/common/AbstractId';

export class AuthorId extends AbstractId<string> {
  public static fromString(value: string) {
    return new AuthorId(value);
  }

  constructor(value: string) {
    super(value);
  }

  public getStringValue(): string {
    return this.value;
  }
}
