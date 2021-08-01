import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidComponent } from './kid/kid.component';
import { LivingComponent } from './living/living.component';
import { BeautyComponent } from './beauty/beauty.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OverviewComponent } from './overview/overview.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { PolicyComponent } from './policy/policy.component';
import { TermsComponent } from './terms/terms.component';
import { ContactOrderComponent } from './contact-order/contact-order.component';
import { ContactNonorderComponent } from './contact-nonorder/contact-nonorder.component';
import { ContactRecentComponent } from './contact-recent/contact-recent.component';
import { ContactFaqComponent } from './contact-faq/contact-faq.component';
import { ContactPostalComponent } from './contact-postal/contact-postal.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path : "", pathMatch : 'full' , redirectTo : "home"},

  {path:'home', component: HomeComponent},
  {path:"header",component: HeaderComponent},
  {path:"footer",component: FooterComponent},
  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent},
  {path:"reset", component: ResetComponent},
  {path:"men", component: MenComponent},
  {path:"women", component: WomenComponent},
  {path:"kids", component: KidComponent},
  {path:"living", component: LivingComponent},
  {path:"beauty", component: BeautyComponent},
  {path:"wishlist", component: WishlistComponent},
  {path:"overview", component: OverviewComponent},
  {path:"order", component: OrderComponent},
  {path:"cart", component: CartComponent},
  {path:"terms", component: TermsComponent},
  {path:"policy", component: PolicyComponent},
  {path:"contact-order", component: ContactOrderComponent},
  {path:"contact-nonorder", component: ContactNonorderComponent},
  {path:"contact-recent", component: ContactRecentComponent},
  {path:"contact-faq", component: ContactFaqComponent},
  {path:"contact-postal", component: ContactPostalComponent},
  {path:"profile", component: ProfileComponent},
  {path:"address", component: AddressComponent},
  {path:"search", component: SearchComponent},

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }