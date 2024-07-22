import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'calculator',
        loadChildren: () => import('./../../pages/calculator/calculator.module').then( m => m.CalculatorPageModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('./../../pages/contacts/contacts.module').then( m => m.ContactsPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./../../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'translator',
        loadChildren: () => import('./../../pages/translator/translator.module').then( m => m.TranslatorPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./../../pages/home/home.module').then( m => m.HomePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
