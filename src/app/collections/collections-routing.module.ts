import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { CompaniesComponent } from './companies/companies.component';
import { PatrnersComponent } from './patrners/patrners.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionHomeComponent,
    children: [
      {
        path: '',
        component: BiographyComponent,
      },
      {
        path: 'Companies',
        component: CompaniesComponent,
      },
      {
        path: 'Partners',
        component: PatrnersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
