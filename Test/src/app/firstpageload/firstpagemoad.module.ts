import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstpageloadComponent } from './firstpageload.component';
import { RouterModule, Routes} from '@angular/router';
import { LazyLoadingModule } from '../Lazy-Loading/lazy-loading.module';
import { LazyLoadingComponent } from '../Lazy-Loading/lazy-loading.component';

const routes: Routes = [
  { path:"lazy-loading", component: LazyLoadingComponent}
];

@NgModule({
  declarations: [
    FirstpageloadComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingModule,
    RouterModule.forRoot(routes),
    // LazyLoadingComponent
  ],
  exports: [RouterModule,FirstpageloadComponent]
})
export class FirstpageloadModule { }
