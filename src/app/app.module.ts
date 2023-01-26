import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ListNewsComponent } from './pages/list-news/list-news.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewsService } from './service/news.service';
import { UserService } from './service/user.service';
import { WatherComponent } from './pages/wather/wather.component';
import { DetailedNewsComponent } from './pages/detailed-news/detailed-news.component';
import { WeatherService } from './service/weather.service';
import { LogComponent } from './pages/log/log.component';

const routes : Routes=[

  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'main-page', component:MainPageComponent},
  {path:'detailed-news/:paginationPosition/:newsPosition', component:DetailedNewsComponent},
  {path:'log', component:LogComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    ListNewsComponent,
    MainPageComponent,
    WatherComponent,
    DetailedNewsComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [NewsService, UserService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
