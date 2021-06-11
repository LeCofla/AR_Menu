import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'entradas',
        loadChildren: () => import('../entradas/entradas.module').then( m => m.EntradasPageModule)
      },
      {
        path: 'principales',
        loadChildren: () => import('../principales/principales.module').then( m => m.PrincipalesPageModule)
      },
      {
        path: 'postres',
        loadChildren: () => import('../postres/postres.module').then( m => m.PostresPageModule)
      },
      {
        path: 'bebidas',
        loadChildren: () => import('../bebidas/bebidas.module').then( m => m.BebidasPageModule)
      },
      {
        path: 'cocteles',
        loadChildren: () => import('../cocteles/cocteles.module').then( m => m.CoctelesPageModule)
      },
      {
        path: 'registro',
        loadChildren: () => import('../registro/registro.module').then( m => m.RegistroPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
