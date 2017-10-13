import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';

import { MdSnackBar } from '@angular/material';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

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

  defaultRSVP: RSVP = {
    name: "",
    guests: 1,
    comment: "Can't wait to party!"
  }

  userRSVP: Observable<RSVP>;
  allRSVPS: Observable<RSVP[]>;
  token: string;

  processRSVP(submittedRSVP) {
    event.preventDefault();
    delete submittedRSVP.$value;
    this.db.object('rsvp/' + this.token).set(submittedRSVP);
    this.snackbar.open('RSVP Saved!', '', {duration: 2000});
  }

  constructor(
    public db: AngularFireDatabase,
    public snackbar : MdSnackBar,
    router: Router,
    route: ActivatedRoute) {
      this.userRSVP = route.params.switchMap(params => {
        this.token = params['token'];
        return db.object('/rsvp/' + this.token);
      })
      this.allRSVPS = db.list('/rsvp');
     }

  ngOnInit() {
  }

}
