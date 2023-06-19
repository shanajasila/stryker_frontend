import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  constructor(private api:ApiService){  }
    

  powerTool:any=[]
  powerToolClick=()=>{
    this.api.fetchPowerToolSet().subscribe(
    (response)=>{
      this.powerTool=response;
      console.log(response);
    }
  )}
  
  instrumentSet:any=[]
  instrumentClick=()=>{
    this.api.fetchInstrumentSet().subscribe(
    (response)=>{
      this.instrumentSet=response;
      console.log(response);
    }
  )}
  
  consumables:any=[]
  consumablesClick=()=>{
    this.api.fetchConsumables().subscribe(
    (response)=>{
      this.consumables=response;
      console.log(response);
    }
  )}

  speciality:any=[]
  specialityClick=()=>{
    this.api.fetchSpecialityAttachments().subscribe(
    (response)=>{
      this.speciality=response;
      console.log(response);
    }
  )}
}
