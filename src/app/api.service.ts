import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  fetchSurgeries = () => {
    return this.http.get("http://localhost:8080/viewTicketInfo")
  }
  
  fetchTicketInformation = (ticket_id:any) => {
    ticket_id=localStorage.getItem("ticket_id")
    return this.http.get("http://localhost:8080/viewticketinfoby/"+ticket_id)
  }

  fetchConsumables = () => {
    return this.http.get("http://localhost:8080/viewConsumables")
  }
  fetchInstrumentSet = () => {
    return this.http.get("http://localhost:8080/viewInstrumentSet")
  }
  fetchPowerToolSet = () => {
    return this.http.get("http://localhost:8080/viewPowerToolSet")
  }
  fetchSpecialityAttachments = () => {
    return this.http.get("http://localhost:8080/viewSpeciality")
  }
}
