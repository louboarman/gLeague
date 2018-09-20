export class Tee {
    id:number;
    courseid: number;
    color:string;
    rating:number;
    slope: number;

    constructor(id:number, courseid:number, color: string, rating:number, slope:number){
        this.id = id;
        this.courseid = courseid;
        this.color = color;
        this.rating = rating;
        this.slope = slope;
    }
}
