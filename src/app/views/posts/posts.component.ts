import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }
  filterPost = '';
  posts = [
    {
      "id": 1,
      "ingrediente": "Calabacín",
      "receta": "Calabacines rellenos de queso fresco."
  
    },
    {
      "id": 2,
      "ingrediente": "Carne picada",
      "receta": "Lasagna de carne y champiñones."
    },
    {
      "id": 3,
      "ingrediente": "Calabacín",
      "receta": "Pisto de calabacín y berengena."
    },
    {
      "id": 4,
      "ingrediente": "Pechuga de pollo",
      "receta": "Pechuga de pollo en salsa bechamel."
    },
    {
      "id": 5,
      "ingrediente": "Carne picada",
      "receta": "Hamburguesas caseras."
    },
    {
      "id": 6,
      "ingrediente": "Atún",
      "receta": "Atún al horno."
    }
    
  ];
  ngOnInit() {
  }

}
