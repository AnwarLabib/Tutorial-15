export class User{
    public username: string
    public password: string
    public token: string;

  constructor(username:string,password:string)
  {
    this.username = username;
    this.password = password;
  }
}