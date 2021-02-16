import { Component } from '@angular/core';




@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'

})


export class HeroeComponent{
  title = 'Valorant';

  nombre: string = 'jett';
  edad: number = 15;
  tipo: string = 'Duelista';

  // tslint:disable-next-line:typedef
  get nombreCapitalizado(){
    return this.nombre.toUpperCase();

  }

  obtenerNombre(): string {
    return `${ this.nombre} - ${this.edad}`;

  }

  cambiarNombre():void{
  this.nombre = 'Sova';
  }

  cambiarEdad():void{
    this.edad = 30;
  }
}
