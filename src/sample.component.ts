import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './sample.component.html'
})
export class SampleComponent implements OnInit {
  @Input() properties:any = {name: 'Nivas', logo: '/imges/kumaran.png', profile: '/imges/profile1.png', role: 'Senior Programmer', views: 8, messages: 5, comments: 3, likes: 24};
  name:string;
  role:string;
  views:number;
  messages:number;
  comments:number;
  likes:number;
  profile:string;

  constructor() {}

  ngOnInit() {
    this.name = this.properties.name;
    this.role = this.properties.role;
    this.views = this.properties.views;
    this.messages = this.properties.messages;
    this.comments = this.properties.comments;
    this.name = this.properties.name;
    this.likes = this.properties.likes;
    this.profile = this.properties.profile;
  }
}
