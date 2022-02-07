import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingComponent } from './lazy-loading.component';
import { TableModule } from 'primeng/table';
// import {CheckboxModule} from 'primeng/checkbox';
import {TooltipModule} from 'primeng/tooltip';



@NgModule({
  declarations: [
    LazyLoadingComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    // CheckboxModule,
    TooltipModule
  ]
})
export class LazyLoadingModule { }
