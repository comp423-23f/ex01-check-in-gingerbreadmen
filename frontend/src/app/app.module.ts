import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { StatsComponent } from './stats/stats.component';
import { CheckinComponent } from './checkin/checkin.component';
import { StudentComponent } from './student/student.component';
import { AmbassadorComponent } from './ambassador/ambassador.component';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    StatsComponent,
    CheckinComponent,
    StudentComponent,
    AmbassadorComponent,
    ManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'student', component: StudentComponent},
      {path: 'ambassador', component: AmbassadorComponent},
      {path: 'manager', component: ManagerComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'stats', component: StatsComponent},
      {path: 'checkin', component: CheckinComponent}



    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
