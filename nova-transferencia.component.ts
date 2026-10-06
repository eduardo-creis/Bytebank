import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransferenciaService } from '../services/transferencia';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor?: number;
  destino?: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitado nova transferencia');

    const valorEmitir: Transferencia = {
      valor: this.valor ?? 0,
      destino: this.destino ?? 0
    };

    this.service.adicionar(valorEmitir).subscribe(
      resultado => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      erro => console.error(erro)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
