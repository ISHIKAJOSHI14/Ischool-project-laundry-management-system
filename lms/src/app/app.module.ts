import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AccountserviceService } from './account/accountservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReviewsModule } from './reviews/reviews.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { AccountModule } from './account/account.module';
import { RegistrationComponent } from './account/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    FooterComponent,
    BannerComponent,
    PagenotfoundComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReviewsModule,
    StaticpagesModule,
    AccountModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [AccountserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
