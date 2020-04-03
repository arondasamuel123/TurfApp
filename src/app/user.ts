

export class User {
  constructor(public username: string, public email: string, public password: string) {}
}
export class LoginUser {
  constructor(public username: string, public password: string) {}
}
export class Turf {
  // tslint:disable-next-line: variable-name
  constructor(public turf_name: string, public turf_location: string, public price: number) {}
}

export class Booking {
  constructor(public players: number, public date: Date, public time: number) {}
}

export class Tournament {
  // tslint:disable-next-line: max-line-length
  // tslint:disable-next-line: variable-name
  constructor(public tournament_name: string, public tournament_date: Date, public tournament_prize: number, public tournament_poster: string) {}
}

export class Join {
  // tslint:disable-next-line: variable-name
  constructor(public team_name: string, public players: number,  public payment_method: string) {}
}

