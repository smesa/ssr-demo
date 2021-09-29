import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';


@NgModule({
  declarations: [
    CustomersComponent,
    ListComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NzLayoutModule,
    NzListModule,
    NzBreadCrumbModule,
    NzDescriptionsModule
  ]
})
export class CustomersModule { }
