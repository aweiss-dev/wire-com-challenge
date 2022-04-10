export class DefaultException extends Error implements Error {
  public get name() {
    return "DefaultException";
  }

  public get originalError() {
    return this._originalError;
  }

  constructor(public message: string, private _originalError?: Error) {
    super(message);
  }
}
