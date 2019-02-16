import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from './Patient';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})


export class PatientserviceService {

  //private baseurl : string ="/assets/data/patients.json"

  private baseurl : string ="http://localhost:8080/patient/"
  

  constructor(private http : HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getPatients():Observable<Patient[]>{
        return this.http.get<Patient[]>(this.baseurl+'getallpatients');
  }

  addPatient(patient:Patient){
    return this.http.post(this.baseurl+'insertpatient',patient);
  }

  deletepatient(pid: number) {
    return this.http.delete(this.baseurl+'deletepatient/'+ pid);
  }
}
