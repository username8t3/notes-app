import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-note-manager',
  templateUrl: './note-manager.component.html',
  styleUrls: ['./note-manager.component.scss']
})
export class NoteManagerComponent implements OnInit {
  @Input() note: Note;

  constructor() { }

  ngOnInit(): void {
  }

}
