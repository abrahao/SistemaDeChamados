import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { AdicionarChamadoComponent } from './adicionar-chamado/adicionar-chamado.component'
import { ListaDeChamadosComponent } from './lista-de-chamados/lista-de-chamados.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home-component', component: HomeComponent },
    { path: 'adicionar-chamado', component: AdicionarChamadoComponent },
    { path: 'lista-de-chamados', component: ListaDeChamadosComponent }
]