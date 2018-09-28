import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {DataService} from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes:any;

 

  constructor(private data:DataService) {
  localStorage.clear();
 
  this.heroes=data.getData();


localStorage.setItem('isEnable', 'false');



                }

  ngOnInit() {

  $(".btn-confirmation").attr('disabled',true);
  }


btnEnable(){
return localStorage.getItem("isEnable");
}
 
 storeData(){
if(localStorage.getItem("isEnable")!=="false"){
this.data.setData(localStorage.getItem("name"),localStorage.getItem("noseat"),localStorage.getItem("seat"));
console.log(this.data.getData());
console.log(localStorage.getItem("seat"));

//localStorage.setItem("isEnable","false");
	
	}
}

var noOfSeats = localStorage.getItem("noseat"), clickCounter = 0, k = 0, UserCount = 0;
$(document).ready(function () {

let temp="";
    $('.table').attr('disabled', true);
    var TableRows = $('.table tr');
    var emptyCell = '<td></td>';
    for (var i = 1; i < TableRows.length; i++) {
        var rowID = 1;
        var colId = $('.table tbody tr:nth-child(' + i + ') td:nth-child(' + 1 + ')').text();
        for (var j = 0; j < 17; j++) {
            var id = rowID + colId;
            var appendString = $("<td/>").html('<span class="tdBox" style="display: inline-block;width: 26px;height: 23px;padding: 1px 3px;border: 4px double white;background-color:#ddd;opacity: 0.4;" id=' + id + '></span>');
            var appendreservedString = $("<td/>").html('<span class="tdBox reserved-seat" style="display: inline-block;width: 26px;height: 23px;padding: 1px 3px;border: 4px double white;background-color:#d9534f;opacity: 0.4;" id=' + id + '></span>');
            if (j == 8) {
                $('#seatTable tbody tr:nth-child(' + i + ')').append(emptyCell);
                rowID--;
            }else if(i===1 && j===6 || i===3 && j===14 || i===6 && j===16){
            $('#seatTable tbody tr:nth-child(' + i + ')').append(appendreservedString);
            }

            else {
                $('#seatTable tbody tr:nth-child(' + i + ')').append(appendString);
            }
            rowID++;
        }
}

 $("#seatTable:has(td)").mouseover(function(e) {

 $(this).css("cursor", "pointer");
 });

 $("#seatTable td .tdBox").on('click',(e)=>{ 
    
     
if(localStorage.getItem("isEnable")!=="false"){
 if(e.currentTarget.className!=="tdBox selected-seat" && e.currentTarget.className!=="tdBox reserved-seat" && noOfSeats>k){
 $(e.target).removeClass("available-seat");
  $(e.target).addClass("selected-seat");
   $(e.target).css("background-color","#5cb85c");
   $(".btn-confirmation").attr('disabled',false);
   temp=temp+' '+e.currentTarget.id;

   console.log(k);
   k++;
    localStorage.setItem("seat",temp);
  }else if(e.currentTarget.className==="tdBox selected-seat"){
   $(e.target).addClass("available-seat");
   $(e.target).css("background-color","#ddd");
   k--
  }
 
  e.stopPropagation();
  }
});

$(".btn-confirmation").click(function(e){
if(localStorage.getItem("isEnable")!=="false"){
console.log(temp);

localStorage.setItem("isEnable","false");
	
	}
});

  });




}