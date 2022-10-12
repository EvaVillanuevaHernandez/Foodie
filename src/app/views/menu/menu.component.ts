import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoadScriptsService } from 'src/app/shared/services/load-scripts.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private name:LoadScriptsService) {
    name.Load(["slider"]);
  }

  ngOnInit() {
   
  }
 


}
