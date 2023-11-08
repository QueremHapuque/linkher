export class AlreadyExistError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AlreadyExistError';
  }
}
