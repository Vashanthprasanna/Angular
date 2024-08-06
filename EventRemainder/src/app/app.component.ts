import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Events } from './Model/events';
import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EventRemainder';

  ent:string

  event:Events;
  result : string;
  flag:boolean;
  eventArr:Events[]

  constructor(private service:EventService){

    this.ent=""

    this.event = new Events();
    this.result=" ";
    this.eventArr=[];
    this.flag=false;

  }


print(data:any){
  data.reset();
}


  insertData(data:any){
    this.event.id = data.id;
    this.event.eventName = data.event;
    this.event.desc = data.desc;
    this.event.date = data.date;
    this.result = this.service.insert(this.event);
   
  }

  updateData(data:any){
    this.event.id = data.id;
    this.event.eventName = data.event;
    this.event.desc = data.desc;
    this.event.date = data.date;
    this.result = this.service.update(this.event);

  }

  deleteData(data:any){
    this.result=this.service.delete(data.id);
 
  }

  findData(data:any){
    this.event = this.service.find(data.id);
    this.result = this.event.id + " " + this.event.eventName + " " + this.event.desc + " " + this.event.date;

  }
  
  findAllData(){
    this.eventArr = this.service.findAll();
    this.flag=true;
  }


}
