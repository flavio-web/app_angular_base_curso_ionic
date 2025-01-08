import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Products } from '../interfaces/product.interface';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-show-product',
  standalone: true,
  imports: [ RouterLink, TitleCasePipe, UpperCasePipe ],
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.scss'
})
export class ShowProductComponent implements OnInit {

  product!: Products;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService
  ){}
  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    console.log({ id });
    if( !id ){
      return;
    }

    this.detailProduct( id );
  }

  async detailProduct( id: string ){
    await this.productService.showProduct( id ).subscribe( ( product ) => {
      console.log( product );
      this.product = product;
    });
  }

}
