import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pizzeria/landing-page/landing-page.component';
import { ProductPageComponent } from './pizzeria/product-page/product-page.component';

const routes: Routes = [
  { path: 'pizzeria',
   loadChildren: () => import('./pizzeria/pizzeria.module').then(m => m.PizzeriaModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
