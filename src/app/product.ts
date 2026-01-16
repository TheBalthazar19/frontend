import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Product {
  url='http://localhost:7000';
  constructor(private http:HttpClient) {}
  addProduct(p:any){
    return this.http.post(`${this.url}/addproduct`,p);
  }
  getProduct(){
    return this.http.get(`${this.url}/getallproducts`);
  }
}
