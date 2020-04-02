import { Time } from '@angular/common';

export class User {
  constructor(public username: string, public email: string, public password: string) {}
}
export class LoginUser {
  constructor(public username: string, public password: string) {}
}
export class Turf {
  constructor(public turfName: string, public turfLocation: string, public price: number) {}
}

export class Booking {
  constructor(public players: number, public date: Date, public time: number) {}
}

export class Tournament {
  // tslint:disable-next-line: max-line-length
  constructor(public tournamentName: string, public tournamentDate: Date, public tournamentPrize: number, public tournamentPoster: string) {}
}

