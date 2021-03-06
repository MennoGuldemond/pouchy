import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import {
  AccountComponent,
  BudgetEditComponent,
  BudgetOverviewComponent,
  HomeComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    BudgetOverviewComponent,
    BudgetEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    GoogleChartsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
