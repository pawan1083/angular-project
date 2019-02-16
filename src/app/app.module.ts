import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { from } from 'rxjs';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientserviceService } from './patientservice.service';
import { HttpClientModule} from '@angular/common/http';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule,MatFormFieldModule,MatButtonModule,  MatCardModule,  MatTableModule,  MatBadgeModule, MatSidenavModule, MatListModule} from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PatientListComponent,
    PatientAddComponent,
    HeaderComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,MatButtonModule,  MatCardModule,  MatTableModule,  MatBadgeModule, LayoutModule, MatSidenavModule, MatListModule
    
    
  ],
  providers: [PatientserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
