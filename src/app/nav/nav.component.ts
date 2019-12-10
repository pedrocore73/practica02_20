import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EncuestaService } from '../encuesta.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  subscripMensaje: Subscription;
  mensaje: string;

  constructor(private encuestaService: EncuestaService) { }

  ngOnInit() {
    this.subscripMensaje = this.encuestaService.isMensajeIn
                                    .subscribe((data:any)=>{
                                      this.mensaje = data.mensaje;
                                    },(err:any)=>{
                                      console.log(err);
                                    })
  }

}
