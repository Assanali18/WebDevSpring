<<<<<<< HEAD
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './interfaces';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(products: Product[], type: string): any {
    return products.filter( product =>{
      return product.type === type
    })
  }
  
  

}
=======
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './interfaces';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(products: Product[], type: string): any {
    return products.filter( product =>{
      return product.type === type
    })
  }
  
  

}
>>>>>>> 78668f55cf726fc0e7ee6bf74a94e0409fbd2f82
