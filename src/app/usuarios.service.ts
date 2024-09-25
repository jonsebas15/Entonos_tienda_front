import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient){
    console.log("Serve")
  };
  getPost(){
    return this.http.get('http://localhost:9090/list');
  }
}
