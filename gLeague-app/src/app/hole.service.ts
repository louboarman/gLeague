import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { HOLES } from './mock-holes';

@Injectable({
  providedIn: 'root'
})
export class HoleService {

  constructor(private http: HttpClient) { }
  
  getHolesForRound(nine){ 
    if (nine =='front'){
      return HOLES; //.find(i => i.number < 10);
    } else {
      return HOLES; //.find(i => i.number > 9);
    }
  }
}
