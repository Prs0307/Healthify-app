import { Injectable } from '@angular/core';
import {Server} from './server';
import { collectionData, deleteDoc, Firestore, updateDoc } from '@angular/fire/firestore';
import { addDoc, doc, collection } from '@firebase/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private fs:Firestore) {}

  //Add new data
  addNote(note:Server){
  note.id = doc(collection(this.fs, 'id')).id
  return addDoc(collection(this.fs, 'Notes'),note)
  }

  //get All notes from Database
  getNotes():Observable<Server[]>{
  let noteRef = collection(this.fs, 'Notes')
  return collectionData(noteRef, {idField: 'id'}) as Observable<Server[]>
}

//Delete Note
  deleteNote(note: Server){
  let docRef =doc(collection(this.fs, `Notes/${note.id}`));

  return deleteDoc(docRef)
}

//Update Notes
UpdateNote(note: ServerService, notes:any){
  let docRef =doc(this.fs, `Notes/{note.id}`);
  return updateDoc(docRef, notes)
}
}
