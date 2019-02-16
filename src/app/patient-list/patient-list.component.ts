import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';
import { Patient } from '../Patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  
  public patients = [];

  constructor(private _patientservice: PatientserviceService, private router: Router) { }

  ngOnInit() {
    this._patientservice.getPatients()
      .subscribe(data => this.patients = data);
  }
  deletepatient(patient: Patient): void {
    this._patientservice.deletepatient(patient.pid)
      .subscribe(data => {
        this.patients = this.patients.filter(u => u !== patient);
      })
  }

}
