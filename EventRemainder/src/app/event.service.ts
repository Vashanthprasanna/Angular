import { Injectable } from '@angular/core';
import { Events } from './Model/events';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url:string;
  eventArr:Events[];
  event:Events;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3004/events";
    this.event = new Events();
    this.eventArr = [];
   }

   insert(event:Events){
    this.http.post<Events>(this.url,event).subscribe();
    return "Event Details Added";
  }

  update(event:Events){
    this.http.put<Events>(`${this.url}/${event.id}`,event).subscribe();
    return "Event Details Updated";
  }
  
  delete(id:number){
    this.http.delete<Events>(this.url+"/"+id).subscribe();
    return "Event Details Deleted";
  }

  find(id:number){
    this.http.get<Events>(this.url+"/"+id).subscribe(data => this.event = data);
    return this.event;
  }

  findAll(){
    this.http.get<Events[]>(this.url).subscribe(data => this.eventArr = data);
    return this.eventArr;
  }
}
