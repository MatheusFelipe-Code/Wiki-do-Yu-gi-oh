import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ReliquiaDetalheComponent } from './features/reliquias/reliquia-detalhe/reliquia-detalhe.component';
import { ReliquiasList } from './features/reliquias/reliquias-list/reliquias-list.component';
import { PersonagensListComponent } from './features/personagens/personagens-list/personagens-list.component';
import { PersonagemDetalheComponent } from './features/personagens/personagem-detalhe/personagem-detalhe.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent },

    {path: 'reliquias', component: ReliquiasList },

    {path: 'reliquias/:id', component: ReliquiaDetalheComponent },

    {path: 'personagens', component: PersonagensListComponent },

    {path: 'personagens/:id', component: PersonagemDetalheComponent },

    {path: '', redirectTo: '/home', pathMatch: 'full'},


];
