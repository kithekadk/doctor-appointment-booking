import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { DoctorSignupComponent } from './components/doctor-signup/doctor-signup.component';
import { HomeComponent } from './components/home/home.component';
import { ViewDoctorsComponent } from './components/view-doctors/view-doctors.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'medic-signup', component: DoctorSignupComponent},
  {path:'explore', component:ViewDoctorsComponent},
  {path:'book', component:BookAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
