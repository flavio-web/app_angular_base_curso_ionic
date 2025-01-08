import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Products } from '../interfaces/product.interface';
import { CardProductComponent } from '../components/card-product/card-product.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CardProductComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  productos: Products[] = [];

  constructor(
    private productService: ProductService
  ){}

  ngOnInit(): void {
    this.listProducts();
  }


  listProducts(){
    this.productService.getProducts().subscribe( ( products ) =>{
      console.log( products );
      this.productos = products;
    });
  }

}
