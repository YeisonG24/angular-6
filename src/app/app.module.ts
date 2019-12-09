import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloWorld } from './firts-component/first.component';
import { NewContentComponent } from './new-content/new-content.component';
import { UserComponent } from './user/user.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    NewContentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
