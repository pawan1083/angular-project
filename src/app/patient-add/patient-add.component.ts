import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { PatientserviceService } from '../patientservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {


  patient : Patient = new Patient();
  constructor(private patientservice  :PatientserviceService,private router :Router) { }

  ngOnInit() {
  }

  onRegister() {
    this.patientservice.addPatient(this.patient)
    . subscribe((res: any) => {
        this.router.navigate(['patient-list']);
    })
  };
}
