import { Component, OnInit } from '@angular/core';
import { Note } from '../Note';
import { NOTES } from '../moke-notes';
import { NoteSearchComponent } from '../note-search/note-search.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  notes = NOTES;
  selectedNote: Note;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(note: Note): void {
    this.selectedNote = note;
  }

}
