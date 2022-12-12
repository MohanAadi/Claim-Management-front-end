import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  ImagePath: string;

  constructor(){
    this.ImagePath = '/assets/images/member-db.jpg'
  }
}
