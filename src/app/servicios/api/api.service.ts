import { Injectable } from '@angular/core';
import { loginI } from '../../models/login/login.interface';
import { ResponseI } from '../../models/login/response.interface';
import { listapacientesI } from '../../models/pacientes/listapacientes.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PacienteI } from '../../models/paciente/paciente.interface'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'https://api.solodata.es/'

  constructor(private http:HttpClient) { }


  loginByEmail(form:loginI):Observable<ResponseI> {

    let direccion = this.url + "auth";

    return this.http.post<ResponseI>(direccion, form);
  }

  getAllPatients(pagne:number):Observable<listapacientesI[]>{

    let direccion = this.url + "pacientes?page=" + pagne;



    return this.http.get<listapacientesI[]>(direccion);

  }

  getSinglePaciente(id:Observable<PacienteI>){

    let direccion = this.url + "/pacientes?id=" + id;

    return this.http.get<PacienteI>(direccion)
  }
}
