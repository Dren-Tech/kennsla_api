export class Student {
  public username: string;

  public firstname?: string;

  public lastname?: string;

  public constructor (username = '') {
    this.username = username;
  }
}
