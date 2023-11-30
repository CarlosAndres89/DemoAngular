import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DevelopersListComponent } from './developers-list/developers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DevelopersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,// <<<< And here
   // NgSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


