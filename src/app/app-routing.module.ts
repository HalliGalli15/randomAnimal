import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './components/about-page/about-page.component';
import { RandomCatComponent } from './components/random-cat/random-cat.component';

const routes: Routes = [
  {
    path: '', component: AboutPageComponent
  },
  {
    path: 'cat', component: RandomCatComponent
  },
  {
    path: 'about', component: AboutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
