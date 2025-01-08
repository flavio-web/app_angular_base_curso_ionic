import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Products } from '../../interfaces/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'card-product',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './card-product.component.html',
  styles: `
    .img-product{
      max-width: 200px;
      max-height: 250px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProductComponent {

  product = input.required<Products>();

}
