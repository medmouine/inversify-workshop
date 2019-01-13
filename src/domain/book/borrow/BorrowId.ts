import { AbstractId } from '@/domain/common/AbstractId';

export class BorrowId extends AbstractId<string> {
  public static fromString(value: string) {
    return new BorrowId(value);
  }

  constructor(value: string) {
    super(value);
  }

  public getStringValue(): string {
    return this.value;
  }
}
