import { NoteDataService } from './../shared/Services/note-data.service';
import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/Models/note';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-note-update',
  templateUrl: './note-update.component.html',
  styleUrls: ['./note-update.component.css']
})
export class NoteUpdateComponent implements OnInit {

  note: Note;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteDataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getNote();
  }

  getNote(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(id)
      .subscribe(note => this.note = note);
  }

  updateNote(): void {
    this.noteService.updateNote(this.note)
      .subscribe(() => this.location.back());
  }


}
