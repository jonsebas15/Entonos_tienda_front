import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UsuariosService]
})
export class AppComponent {
  posts: any[] = []
  constructor(private usuario:UsuariosService){
    this.usuario.getPost().subscribe(post => {
      console.log(post)
      this.posts = [post]
    })
  }

  title = 'usuarios de la tienda';

}

export interface usuarios{
  id:number;
  nombre:String
  correo:String
}