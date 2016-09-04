import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { FlickrDetailComponent } from './flickr-detail.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FlickrDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

