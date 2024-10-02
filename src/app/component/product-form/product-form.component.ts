import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
  providers: [ProductService]
})
export class ProductFormComponent {
  constructor(private productService:ProductService, private router:Router){

  }

  producto : Product ={
    id:0,
    idProveedor: {id:2, nombre:''},
    ivaCompra:0,
    nombre:'',
    precioCompra:0,
    precioVenta: 0
  }

  submitProduct(){
    console.log(this.producto)
    this.productService.createProduct(this.producto)
    .subscribe(
      {
        next: res => {console.log(res);
                       this.router.navigate(['/'])},
        error: eror => console.log(eror)
      }
    )
  }
}
