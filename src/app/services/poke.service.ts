import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http:HttpClient) {
    
  }
    getList(){
      return this.http.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10");
    }

    getPoketData(name:String){
      return this.http.get("https://pokeapi.co/api/v2/pokemon/"+name);
    }
    
   
}
