import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntoComponent } from './into/into.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContentComponent } from './content/content.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';
import {ConfigService} from './config.service';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {PagerService} from './pager.service';
import {PaginationComponent} from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    IntoComponent,
    GallaryComponent,
    ContentComponent,
    TestimonialsComponent,
    ClientsComponent,
    PricingComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    SocialComponent,
    BlogComponent,
    PostComponent,
    ArticleComponent,
    NotfoundComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ConfigService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
