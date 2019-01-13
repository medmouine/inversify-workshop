export abstract class AbstractId<T> {
  protected value: T;

  protected constructor(value: T) {
    this.value = value;
  }
}
