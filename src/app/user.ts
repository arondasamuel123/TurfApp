

export class User {
  constructor(public username: string, public email: string, public password: string) {}
}
export class LoginUser {
  constructor(public username: string, public password: string) {}
}
export class Turf {
  constructor(public turf_name: string, public turf_location: string, public price: number) {}
}

export class Booking {
  constructor(public players: number, public date: Date, public time: number) {}
}

export class Tournament {
  // tslint:disable-next-line: max-line-length
  constructor(public tournamentName: string, public tournamentDate: Date, public tournamentPrize: number, public tournamentPoster: string) {}
}

export class Join {
  constructor(public teamName: string, public players: number,  public paymentMethod: string) {}
}

