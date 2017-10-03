import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchTextComponent } from './search-text/search-text.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  SearchTextComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
