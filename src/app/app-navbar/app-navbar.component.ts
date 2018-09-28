import { Component, OnInit,Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
 
  constructor() { 

  }

  ngOnInit() {
 $(document).ready(function () {
 for(let i=1;i<11;i++){
  $("#noseat").append('<option value='+i+'>'+i+'</option>');
 }


  });
    
  }
 


  isEnable(e){
  e.preventDefault();
  $("#name").attr('disabled',true);
   $("#noseat").attr('disabled',true);
  localStorage.setItem("name",e.target.name.value);
  
  
  localStorage.setItem("noseat",e.target.noseat.value);
  localStorage.setItem("isEnable","true");
  }

}
