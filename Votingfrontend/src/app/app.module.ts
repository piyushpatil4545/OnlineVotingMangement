import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaModule }  from './spa/spa.module';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthGuard} from 'src/app/auth.guard';
// import { PopupModule } from 'ng2-opd-popup';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpaModule,
    HttpClientModule,
    ReactiveFormsModule,
    // PopupModule.forRoot(),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
