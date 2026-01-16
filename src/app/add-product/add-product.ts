import { Component } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-product.html',
})
export class AddProduct {
product={pid:'',pname:'',price:'',brand:''};
constructor(private ps:Product){}
add(){
  this.ps.addProduct(this.product).subscribe(()=>{
    alert('Product added successfully');
    this.product={pid:'',pname:'',price:'',brand:''};
  });
}
}
