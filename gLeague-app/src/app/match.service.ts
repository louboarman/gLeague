import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { MATCHES } from './mock-match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }
  
  getMatches(){
    return MATCHES;
  }
  getHoleScoresForRound(){
    return MATCHES; 
  }
}
