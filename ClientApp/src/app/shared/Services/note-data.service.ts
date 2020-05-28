import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Note } from '../Models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteDataService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  // Get all notes
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.baseUrl + 'api/notes')
    .pipe(
      catchError(this.handleError<Note[]>('getNotes'))
    );
  }

  // Get note by id
  getNote(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.baseUrl}api/notes/${id}`)
      .pipe(
          catchError(this.handleError<Note>('getNote'))
        );
  }

  // Add note
  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.baseUrl + 'api/notes', note)
      .pipe(
        catchError(this.handleError('addNote', note))
      );
  }

  // Update note
  updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.baseUrl}api/notes/${note.id}`, note)
    .pipe(
      catchError(this.handleError<Note>('updateNote'))
    );
  }

  // Delete note
  deleteNote(id: number): Observable<Note> {
    return this.http.delete<Note>(`${this.baseUrl}api/notes/${id}`)
    .pipe(
      catchError(this.handleError<Note>('deleteNote'))
    );
  }



  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
