import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//import * as AOS from 'aos';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { LivingComponent } from './living/living.component';
import { BeautyComponent } from './beauty/beauty.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OverviewComponent } from './overview/overview.component';
import { OrderComponent } from './order/order.component';
import { TermsComponent } from './terms/terms.component';
import { CartComponent } from './cart/cart.component';
import { PolicyComponent } from './policy/policy.component';
import { ContactOrderComponent } from './contact-order/contact-order.component';
import { ContactNonorderComponent } from './contact-nonorder/contact-nonorder.component';
import { ContactRecentComponent } from './contact-recent/contact-recent.component';
import { ContactFaqComponent } from './contact-faq/contact-faq.component';
import { ContactPostalComponent } from './contact-postal/contact-postal.component';
import { ProfileComponent } from './profile/profile.component';
import { KidComponent } from './kid/kid.component';
import { AddressComponent } from './address/address.component';
import { SearchComponent } from './search/search.component';


//import { AngularFireModule } from '@angular/fire';
//import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ResetComponent,
    MenComponent,
    WomenComponent,
    LivingComponent,
    BeautyComponent,
    WishlistComponent,
    OverviewComponent,
    OrderComponent,
    TermsComponent,
    CartComponent,
    PolicyComponent,
    ContactOrderComponent,
    ContactNonorderComponent,
    ContactRecentComponent,
    ContactFaqComponent,
    ContactPostalComponent,
    ProfileComponent,
    KidComponent,
    AddressComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
