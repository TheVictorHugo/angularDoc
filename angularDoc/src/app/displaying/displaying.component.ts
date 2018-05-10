import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-displaying',
  templateUrl: './displaying.component.html',
  styleUrls: ['./displaying.component.css']
})
export class DisplayingComponent implements OnInit {
  titulo: string = "Tour of Heros";
  /*
  heroes = [
    new Hero(1, 'Thor'),
    new Hero(2, 'Iron Man'),
    new Hero(2,'Hulk'),
    new Hero(3, 'Spaer Man')
  ];
  */
 heroes = ['Thor', 'Iron Man', 'Hulk', 'Spaer Man'];
  
  myhero = this.heroes[0];


  constructor() {
   }

  ngOnInit() {
  }

}
