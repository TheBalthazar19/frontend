import { Routes } from '@angular/router';
import {AddProduct} from "./add-product/add-product";
import{DisplayProduct} from "./display-product/display-product";
export const routes: Routes = [
    {path: '',redirectTo:'add',pathMatch:'full'},
    {path: 'add', component: AddProduct},
    {path: 'display', component: DisplayProduct}
];
