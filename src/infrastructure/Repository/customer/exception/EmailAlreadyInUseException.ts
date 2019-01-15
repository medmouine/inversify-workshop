export class EmailAlreadyInUseException extends Error {
  constructor(email: string) {
    super(`Email : ${email} is already in use`);
  }
}
