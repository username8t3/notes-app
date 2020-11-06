import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NoteManagerComponent } from './note-manager/note-manager.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteSearchComponent } from './note-search/note-search.component';
import { NoteTagComponent } from './note-tag/note-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteManagerComponent,
    NoteListComponent,
    NoteDetailComponent,
    NoteSearchComponent,
    NoteTagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
