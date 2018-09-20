import { Injectable } from '@angular/core';
import { Player } from './player';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { PLAYERS } from './mock-players';

@Injectable()
export class PlayerService {

  constructor(private http: HttpClient) { }

	// getPlayers(): Observable<Player[]> {
	// 		 return this.http.get('http://ec2-18-219-31-173.us-east-2.compute.amazonaws.com/api/players').map(mapPlayers); 
	// }	
	getPlayers(){
		return PLAYERS;
	}
}
	

function mapPlayers(data):Player[]{
	var arrplayers = {leaguemembers: []};
	var i,x,j;
	for (i in data.players) {
		var item = data.players[i];;
		arrplayers.leaguemembers.push({
			"name" : item.name,
			"role" : item.role, 
			"email" : item.email
		});
	}
	return arrplayers.leaguemembers;
}