import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './views/menu/menu.component';
import { PostsComponent } from './views/posts/posts.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SingInComponent } from './views/sing-in/sing-in.component';
import { WelcomeComponent } from './views/welcome/welcome.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sing-in', component: SingInComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'posts', component: PostsComponent },
  { path: '', redirectTo: '/welcome', pathMatch:'full'}
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
