import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes: Routes = [
  {
    path: '', component: AppComponent
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
