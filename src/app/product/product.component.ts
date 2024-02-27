import { Component, Input } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: any;
  
  liked: boolean = false;

  toggleHeart() {
    this.liked = !this.liked;
  }
  constructor(
    private productServ: ProductService
  ){}
  shareViaTelegram(product: any) {
    const url = encodeURIComponent(product.link);
    const telegramUrl = `https://telegram.me/share/url?url=${url}&text=${product.title}`;
    window.open(telegramUrl, '_blank');
  }

  addProduct(product:any){
    this.productServ.addProduct(product);
  }
  
  
}
