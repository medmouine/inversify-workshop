import { AbstractId } from '@/domain/common/AbstractId';

export class CustomerId extends AbstractId<string> {

  public static fromString(value: string) {
    return new CustomerId(value);
  }

  constructor(value: string) {
    super(value);
  }

  public getStringValue(): string {
    return this.value;
  }
}
