import { Injectable } from '@angular/core';
import { Chamados } from './chamados'
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ChamadosService {

  constructor(private db: AngularFireDatabase) { }

  insert(chamados: Chamados){
    this.db.list('chamados').push(chamados)
      .then((result: any) => {
        console.log(result.key)
      })
  }
  getAll(){
    return this.db.list('chamados')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
        })
      )
  }
  delete(key: string){
    this.db.object(`chamados/${key}`).remove()
  }
}