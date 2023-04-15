import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private baseURL="https://pokeapi.co/api/v2";
  
  constructor(private http:HttpClient) {
    
  }
    getList(page:number=0,limit:number=0){
      return this.http.get(`${this.baseURL}/pokemon/`,{params:{ //params sustituye ?offset=${page}&limit=12 
        "offset":page,
        "limit":limit,
      }});
    }

    getPoketData(name:String){
      return this.http.get(`${this.baseURL}/pokemon/${name}`);
    }
    
   
}
