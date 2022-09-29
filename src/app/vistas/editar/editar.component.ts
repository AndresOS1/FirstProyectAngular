import { PacienteI } from './../../models/paciente/paciente.interface';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ApiService } from '../../servicios/api/api.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private aciverouter:ActivatedRoute, private router:Router, private api:ApiService) { }


  datosPaciente?:PacienteI;

  editarForm = new FormGroup({
    nombre:  new FormControl(''),
    correo:  new FormControl(''),
    dni:  new FormControl(''),
    direccion:  new FormControl(''),
    codigoPostal:  new FormControl(''),
    genero:  new FormControl(''),
    telefono:  new FormControl(''),
    token:  new FormControl(''),
    pacienteId:  new FormControl(''),
    fechaNacimiento:  new FormControl(''),

})

  ngOnInit(): void {

    let pacienteid:any = this.aciverouter.snapshot.paramMap.get('id')
    let token = this.getToken()
    this.api.getSinglePaciente(pacienteid).subscribe(data  => {

      this.datosPaciente = data[0];

      console.log(this.datosPaciente);


    })
    // console.log(token);

  }


  getToken(){
    return localStorage.getItem('token')
  }

}
