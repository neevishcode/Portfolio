import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { FirstpageloadModule } from './firstpageload/firstpagemoad.module';
import {CheckboxModule} from 'primeng/checkbox';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// const routes: Routes = [
//   { path:"lazy-loading", component: LazyLoadingComponent}
// ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes),
    RouterModule,
    TableModule,
    FirstpageloadModule,
    CheckboxModule
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
