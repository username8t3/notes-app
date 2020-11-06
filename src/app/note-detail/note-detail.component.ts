import { Component, OnInit } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  note: Note = {
    id: 1,
    title: 'test',
    text: 'test',
    date: new Date('December 17, 1995 03:24:00')
  };

  constructor() { }

  ngOnInit(): void {
  }

}
