import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private mensajeIn = new BehaviorSubject<any>({mensaje: ''});

  get isMensajeIn() {
    return this.mensajeIn.asObservable();
  }

  constructor() { }

  setMensaje(texto) {
    this.mensajeIn.next({mensaje: texto});
  }
}
