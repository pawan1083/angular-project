import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'patient-list',component:PatientListComponent},
  {path:'patient-add',component:PatientAddComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
