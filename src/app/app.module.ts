import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatCardModule, MatSelectModule, MatSnackBarModule, MatTableModule } from '@angular/material';
import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';

import { HomeComponent } from './home/home.component';
import { RSVPComponent } from './rsvp/rsvp.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RSVPComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'rsvp/:token', component: RSVPComponent },
      { path: 'admin', component: AdminComponent }
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [
    {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
