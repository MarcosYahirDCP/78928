import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: any[] = [];


  constructor(private http:HttpClient) { }

  salvarSaludador(saludador:string[]){
    this.http.post('https://tw78928-943d8-default-rtdb.firebaseio.com/saludador.json',saludador)
    .subscribe(
      response => (console.log('respuesta del servidor'+response)),
      error => console.log ('error del servidor'+error)
    );
  }

  // mostrarSaludador(){
  //   this.http.get('https://tw78928-943d8-default-rtdb.firebaseio.com/saludador.json').pipe(
  //     map( (responseData: any) => {
  //       const items = [];
  //       for (const key in responseData){
  //         if (responseData.hasOwnProperty (key)) {
  //           items.push({id: key, ...responseData[key]});
  //         }
  //       }
  //       return items;
  //     })).subscribe(items => {console.log(items);});

  // }


  mostrarSaludador(): Observable<any[]>{
    return this.http.get('https://tw78928-943d8-default-rtdb.firebaseio.com/saludador.json').pipe(
      map( (responseData: any) => {
        const items = [];
        for (const key in responseData){
          if (responseData.hasOwnProperty (key)) {
            items.push({id: key, ...responseData[key]});
          }
        }
        return items;
      }))
      //.subscribe(items => {console.log(items);});

  }
}
