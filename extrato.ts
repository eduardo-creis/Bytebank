import { Component, Input, OnInit } from '@angular/core';

import { CurrencyPipe, DatePipe, NgForOf, NgIf } from '@angular/common';

import { TransferenciaService } from '../services/transferencia';

import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [NgForOf, DatePipe, CurrencyPipe, NgIf],
  templateUrl: './extrato.html',
  styleUrl: './extrato.scss',
})
export class Extrato implements OnInit {

  @Input ()transferencias: Transferencia[] = [];

  constructor(private service: TransferenciaService) {}



ngOnInit(): void {
    this.service.todas().subscribe(
      (transferencias: Transferencia[]) => {
        this.transferencias = transferencias;
      },
      (erro) => console.error(erro)
    );
  }
}
