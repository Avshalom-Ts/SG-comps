import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PatrnersComponent } from './patrners/patrners.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [CollectionHomeComponent, TableComponent, BiographyComponent, CompaniesComponent, PatrnersComponent, TabsComponent],
  imports: [CommonModule, CollectionsRoutingModule, SharedModule],
  exports: [],
})
export class CollectionsModule {}
