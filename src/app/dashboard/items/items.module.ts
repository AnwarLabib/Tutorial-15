import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  imports: [ThemeModule, ItemsRoutingModule, ReactiveFormsModule, FormsModule],
  declarations: [ItemsComponent, ProductItemComponent],
  providers: []
})
export class ItemsModule {}
