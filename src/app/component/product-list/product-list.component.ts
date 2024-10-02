import { Component } from '@angular/core';
import { ProductService } from "../../service/product.service";
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers:[ProductService]
})

export class ProductListComponent {
  productos:Product[] = [];
  constructor(private productService:ProductService){ }
  ngOnInit(){
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => {this.productos=res;},
      err => console.log(err)
    )
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(
      res=> {this.getProducts(); console.log(res)},
      err=>console.log(err)
    )
  }
}
