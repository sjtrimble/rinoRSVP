import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

export interface RSVP {
  name: string;
  guests: number;
  comment: string;
}

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html'
})
export class RSVPComponent implements OnInit {

  submittedRSVP: RSVP = {
    name: "",
    guests: 1,
    comment: "Can't wait to party!"
  }

  processRSVP(submittedRSVP) {
    event.preventDefault();
  }

  constructor(db: AngularFireDatabase) { }

  ngOnInit() {
  }

}
