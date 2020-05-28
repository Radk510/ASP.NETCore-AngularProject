import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/Models/note';
import { NoteDataService } from '../shared/Services/note-data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[];

  constructor(private noteService: NoteDataService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes().subscribe(notes => this.notes = notes);
  }

  addNote(stringNote: string): void {
    stringNote = stringNote.trim();
    if (!stringNote) { return; }
    this.noteService.addNote({ stringNote } as Note)
      .subscribe(note => this.notes.push(note));
  }

  deleteNote(id: number): void {
    this.noteService.deleteNote(id)
    .subscribe(note => this.notes = this.notes.filter(n => n.id !== note.id));
      // .subscribe(note => this.notes.filter(n => n !== note));
  }

}

