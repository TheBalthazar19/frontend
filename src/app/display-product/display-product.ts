import { Component,OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-display-product',
  templateUrl: './display-product.html',
})
export class DisplayProduct {
products:any[]=[];
constructor(private ps:Product){}
ngOnInit(){
this.ps.getProduct().subscribe((data:any)=>{
  this.products=data;
});
}
}
