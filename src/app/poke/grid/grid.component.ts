import { Component } from '@angular/core';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  pokeList:Array<any>=[];
  private page:number=0;
  private limit:number=6;
  btnDes:boolean=true; //esta variable es verdadera ya que se empieza desde la pagina 0 asi que no debe de haber boton atras

  constructor(private pokeService:PokeService){
    this.setData()

  }

  setData(){
    this.pokeService.getList(this.page,this.limit).subscribe((res:any)=>{
      console.log(res); //el res es el array que se muestra en consola
      this.pokeList=res.results;
    });
  }


  nextPage(){
    this.page=this.page+6;
    this.limit+=6;
    this.setData()
    this.btnDes=false //Al cambiar de pagina hacia delante, el btnDes se vuelve falso para que aparezca
    
  }



  backPage(){
    this.page-=6;
    this.limit-=6
    if(this.page<=0){
      this.setData()

      this.btnDes=true;
      this.page=0;
    }
    else{
      this.pokeService.getList(this.page,this.limit).subscribe((res:any)=>{
      console.log(res); //el res es el array que se muestra en consola
      this.pokeList=res.results;
      });
      this.btnDes=false
    }
  }
}
