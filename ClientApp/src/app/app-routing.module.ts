import { NotesComponent } from './notes/notes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NoteUpdateComponent } from './note-update/note-update.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'update/:id', component: NoteUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
