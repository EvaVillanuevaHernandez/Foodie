import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './views/login/login.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingInComponent } from './views/sing-in/sing-in.component';
import { MenuComponent } from './views/menu/menu.component';
import { LoadScriptsService } from './shared/services/load-scripts.service';
import { BottonBarComponent } from './botton-bar/botton-bar.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ContactComponent } from './views/contact/contact.component';
import { PostsComponent } from './views/posts/posts.component';
import { FilterPipe } from './views/pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    SingInComponent,
    MenuComponent,
    BottonBarComponent,
    ProfileComponent,
    ContactComponent,
    PostsComponent,
    FilterPipe
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoadScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
