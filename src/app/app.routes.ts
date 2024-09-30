import { Routes } from '@angular/router';

import { ProductListComponent } from "./component/product-list/product-list.component";
import { ProductFormComponent } from './component/product-form/product-form.component'


export const routes: Routes = [{
    path : '',
    component: ProductListComponent
},
{
    path :'product/create',
    component : ProductFormComponent
},
{
    path :'product',
    component : ProductListComponent
},
{
    path :'product/edit/:id',
    component : ProductFormComponent
}
];
