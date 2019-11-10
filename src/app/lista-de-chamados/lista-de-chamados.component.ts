import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-chamados',
  templateUrl: './lista-de-chamados.component.html',
  styleUrls: ['./lista-de-chamados.component.css']
})
export class ListaDeChamadosComponent implements OnInit {

  constructor() { }

  chamados = ['Chamado1','Chamado2','Chamado3','Chamado4']

  ngOnInit() {
  }

}
