import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product/product.service';
import { Product } from 'src/app/model/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  datas:Product[]=[];

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.getAll().subscribe(data =>{
      this.datas = data
    })
  }

  getProduct(id:number){
    this.router.navigate(['detail',id])

  }
}
