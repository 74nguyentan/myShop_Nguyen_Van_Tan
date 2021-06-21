import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/Service/product/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
product:Product
  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.product = new Product();
    this.getRoute(this.route.snapshot.params['id']);
  }
  getRoute(id:any){
    this.productService.getProduct(id).subscribe((res:any)=>{
      this.product = res;
    });    
  }

}
