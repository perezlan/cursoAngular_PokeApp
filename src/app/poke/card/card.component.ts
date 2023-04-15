import { Component,Input,OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input()
  info:any //esta variable es de cualquier tipo para que se iguale array que esta en el grid.component.html 'pokemon'
  url:String="";

  constructor(private pokeService:PokeService){
    console.log(this.info); //Como es en el constructor, sale "Undefined ya que el constructor es lo primero que se carga antes que el array"

  }
  
  ngOnInit(): void {
      console.log(this.info) //con el Onitit si se ve el array porque espera a que todo cargue correctamente
      this.pokeService.getPoketData(this.info.name).subscribe((res:any)=>{
        console.log(res.sprites.front_default)
        this.url=res.sprites.front_default
        
        
      })
  }
}
