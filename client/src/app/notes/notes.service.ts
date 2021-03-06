import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs';

import { Note } from './notes';



@Injectable()
export class NotesService {

  constructor(private _http: Http) { }

  get_notes(){
    return this._http.get('/notes')
              .map(data => data.json())
              .toPromise()
  }

  create_note(newNote){
    return this._http.post( '/notes/create', newNote )
              .map( data => data.json() )
              .toPromise()
  }

}
