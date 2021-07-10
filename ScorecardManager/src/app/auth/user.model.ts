export class User {
  constructor(public email: string,
              public id: string,
              public _token: string,
              public tokenExpirationDate: Date) {}

  get token() {
    if(!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
