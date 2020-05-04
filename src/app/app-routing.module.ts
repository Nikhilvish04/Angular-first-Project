import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntoComponent } from './into/into.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContentComponent } from './content/content.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import {BlogComponent} from './blog/blog.component';
import {ArticleComponent} from './article/article.component';
import {NotfoundComponent} from './notfound/notfound.component';
import{PaginationComponent} from './pagination/pagination.component';
  
import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo:'/Home', pathMatch:'full'},
  { path: 'Home',component : HeaderComponent},
  { path: 'About',component : IntoComponent},
  { path: 'Services',component : ContentComponent},
  { path: 'Testimonials',component : TestimonialsComponent},
  { path: 'Gallery',component : GallaryComponent},
  { path: 'Clients',component : ClientsComponent},
  { path: 'Pricing',component : PricingComponent},
  { path: 'Blog',component : BlogComponent},
  { path: 'Article/:id',component : ArticleComponent},
  {path: '404',component : NotfoundComponent},
  {path: '**', redirectTo : '/404'},
  {path:'',component:PaginationComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
