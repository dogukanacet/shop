import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';
import { HeaderComponent } from './components/elements/header/header.component';
import { FooterComponent } from './components/elements/footer/footer.component';


import { FilterComponent } from './components/elements/filter/filter.component';
import { ProductCardComponent } from './components/elements/product-card/product-card.component';
import { PaginationComponent } from './components/elements/pagination/pagination.component';

import { ButtonComponent } from './components/elements/button/button.component';
import { BreadcrumbsComponent } from '../app/components/elements/breadcrumbs/breadcrumbs.component'


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    ProductCardComponent,
    PaginationComponent,
    ButtonComponent,

    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule

  ],
  providers: [MainComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
