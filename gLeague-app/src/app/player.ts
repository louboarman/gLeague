export class Player {
    id:number;
    name: string;
	role: number; //0-active, 1-sub, 2-archived, 3-admin
    email: string;
    
    constructor(id:number, name: string, role: number, email: string){
		this.id = id;
		this.name = name;
		this.role = role;
		this.email = email;
	}
}
