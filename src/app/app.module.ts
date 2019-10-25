import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AdminSigninComponent } from './admin/admin-signin/admin-signin.component';
import { HeaderComponent } from './header/header.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
     CourseComponent,
    AdminSigninComponent,
    HeaderComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
