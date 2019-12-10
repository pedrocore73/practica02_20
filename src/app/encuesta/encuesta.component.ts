import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  constructor(private encuestaService: EncuestaService) { }

  ngOnInit() {
  }

  saveEncuesta() {
    this.encuestaService.setMensaje('Los datos han sido enviados correctamente');
  }

}
