import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { CoursesliderComponent } from './Components/courseslider/courseslider.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations" 
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Static1Component } from './Components/static1/static1.component';
import { Static2Component } from './Components/static2/static2.component';
import { ReviewComponent } from './Components/review/review.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { InstructorComponent } from './Components/instructor/instructor.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './Components/contact/contact.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CoursesliderComponent,
    Static1Component,
    Static2Component,
    ReviewComponent,
    AboutusComponent,
    InstructorComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    NotFoundComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
