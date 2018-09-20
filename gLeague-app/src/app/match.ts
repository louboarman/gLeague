export class Match {
    id: number;
    dateplayed: Date;
    teamOne: number;
    teamTwo: number;
    constructor(id:number, dateplayed: Date, teamOne: number, teamTwo: number){
        this.id = id;
        this.dateplayed = dateplayed;
        this.teamOne = teamOne;
        this.teamTwo = teamTwo;
    }
}
