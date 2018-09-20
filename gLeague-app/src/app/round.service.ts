import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Round } from './round';
import { ROUNDS } from './mock-rounds';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  constructor(private http: HttpClient) { }

  getRounds(){
    return ROUNDS;
  }
  
}
