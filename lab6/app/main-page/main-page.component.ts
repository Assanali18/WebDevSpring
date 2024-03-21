<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Observable } from 'rxjs';
import { Product } from '../shared/interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
	products$!: Observable<Product[]>;

	constructor(
		public productServ: ProductService
	){}
	
	
	
	ngOnInit() {
		this.products$ = this.productServ.getAll();
	}
	
}
=======
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Observable } from 'rxjs';
import { Product } from '../shared/interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
	products$!: Observable<Product[]>;

	constructor(
		public productServ: ProductService
	){}
	
	
	
	ngOnInit() {
		this.products$ = this.productServ.getAll();
	}
	
}
>>>>>>> 78668f55cf726fc0e7ee6bf74a94e0409fbd2f82
