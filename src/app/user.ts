export class User {
  constructor(public username: string, public email: string, public password: string) {}
}
export class LoginUser {
  constructor(public username: string, public password: string) {}
}
export class Turf {
  constructor(public turfName: string, public turfLocation: string, public price: number) {}
}
