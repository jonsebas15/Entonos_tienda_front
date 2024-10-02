import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL:string = 'http://localhost:9090'

  constructor(private http : HttpClient) { }


  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/productos`)
  }
  getProduct(id:number) : Observable<Product>{
    return this.http.get<Product>(`${this.BASE_URL}/productos/${id}`)
  }
  createProduct(product : Product) : Observable<Product>{
     return this.http.post<Product>(`${this.BASE_URL}/productos`,product)
  }
  deleteProduct(id:number):Observable<Product>{
     return this.http.delete<Product>(`${this.BASE_URL}/productos/${id}`)
  }
  updateProduct(id:number, product:Product):Observable<Product>{
     return this.http.put<Product>(`${this.BASE_URL}/productos/${id}`, product)
  }

}
