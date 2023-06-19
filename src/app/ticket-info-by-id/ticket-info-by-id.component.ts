import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-ticket-info-by-id',
  templateUrl: './ticket-info-by-id.component.html',
  styleUrls: ['./ticket-info-by-id.component.css']
})
export class TicketInfoByIdComponent {
  
  priorityColor: any = {
    'Very High': 'rgb(196, 17, 71)',
    'High': 'red',
    'Normal': 'green'
  };

ticket_id:any=""
  constructor(private api : ApiService)
  {
    this.ticket_id=localStorage.getItem("ticket_id")
    console.log(this.ticket_id)
    let data:any={"ticket_id":this.ticket_id}
    this.api.fetchTicketInformation(this.ticket_id).subscribe(
      (response:any)=>
      {
        this.data=response
          console.log(response)
      }
    )
  }
  data:any=[]
  
}
