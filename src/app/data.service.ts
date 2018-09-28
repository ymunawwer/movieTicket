import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:any=[];

  constructor() {



   }

   setData(name,noseat,seat){
   console.log("data"+seat);
   this.data.push({
   "name":name,
   "no_seat":noseat,
   "seatno":seat
   });

   }
   getData(){
   return this.data;
   }
}
