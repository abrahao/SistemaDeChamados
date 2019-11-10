import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-chamado',
  templateUrl: './adicionar-chamado.component.html',
  styleUrls: ['./adicionar-chamado.component.css']
})
export class AdicionarChamadoComponent implements OnInit {

  constructor() { }

  botaoCadastrar(): void{
    alert("Funcionalidade ainda em desenvolvimento")
  }

  ngOnInit() {
  }
}
