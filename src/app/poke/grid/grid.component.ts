import { Component } from '@angular/core';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  pokeList:Array<any>=[];

  constructor(private pokeService:PokeService){
    pokeService.getList().subscribe((res:any)=>{
      console.log(res); //el res es el array que se muestra en consola
      this.pokeList=res.results;
      
    })
  }
}
