import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {

  private ListaTransferencia: any[];

  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.ListaTransferencia = [];
  }

  get Transferencia() {
    return this.ListaTransferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(Transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(Transferencia);

    return this.httpClient.post<Transferencia>(
      this.url,
      Transferencia
    );
  }

  private hidratar(Transferencia: Transferencia) {
    Transferencia.data = new Date().toISOString();
  }
}
