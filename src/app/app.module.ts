import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// routes
import { APP_ROUTES } from './app.routes';
// modules
import { PagesModule } from './pages/pages.module';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// Temp
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
