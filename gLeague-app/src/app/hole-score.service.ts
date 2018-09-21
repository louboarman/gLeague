import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { HOLESCORES } from './mock-hole-scores';

@Injectable({
  providedIn: 'root'
})
export class HoleScoreService {

  constructor(private http: HttpClient) { }
  
  getHoleScoresForRound(){
    return HOLESCORES; 
  }

}
