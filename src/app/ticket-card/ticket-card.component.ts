import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent {


  priorityColor: any = {
    'Very High': 'rgb(196, 17, 71)',
    'High': 'red',
    'Normal': 'green'
  };

  surgerydetails: any = []

  constructor(private api: ApiService, private route: Router) {
    api.fetchSurgeries().subscribe(

      (response: any) => {
        console.log(response)
        this.surgerydetails = response
      }

    )
  }

  TicketIdClick = (ticket_id: any) => {
    let data: any = { "ticket_id": ticket_id }
    console.log(data)
    localStorage.setItem("ticket_id", ticket_id)
    this.route.navigate(['/viewById'])
  }
}
