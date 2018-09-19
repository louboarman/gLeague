export class HoleScore {
    roundid: number;
    holeid: number;
    playerid: number;
    strokes: number;
    putts: number;
    birdie: boolean;
    par: boolean;
    bogie: boolean;
    other: boolean;
    gir: boolean;
    parsave: boolean;

    constructor (roundid: number, holeid: number, playerid: number, strokes: number, putts: number, birdie: boolean, par: boolean, bogie: boolean, other: boolean, gir: boolean, parsave: boolean)
    {
        this.roundid = roundid;
        this.holeid = holeid;
        this.playerid = playerid;
        this.strokes = strokes;
        this.putts = putts;
        this.birdie = birdie;
        this.par = par;
        this.bogie = bogie;
        this.other = other;
        this.gir = gir;
        this.parsave = parsave;
    }

}
