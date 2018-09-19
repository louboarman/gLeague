export class Hole {
    number: number;
    par: number;
    hdcp: number;
    courseid: number;

    constructor(number:number, par: number, hdcp: number, courseid: number){
		this.number = number;
		this.par = par;
        this.hdcp = hdcp;
        this.courseid = courseid;
	}
}
