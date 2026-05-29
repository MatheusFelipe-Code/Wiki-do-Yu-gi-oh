import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ReliquiaDetalheComponent } from './features/reliquias/reliquia-detalhe/reliquia-detalhe.component';
import { ReliquiasList } from './features/reliquias/reliquias-list/reliquias-list.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent },

    {path: 'reliquias', component: ReliquiasList },

    {path: 'reliquias/:id', component: ReliquiaDetalheComponent },

    {path: '', redirectTo: '/home', pathMatch: 'full'},


];
