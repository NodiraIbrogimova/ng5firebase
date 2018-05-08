import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from './create/create.component';
import {IndexComponent} from './index/index.component';

export const routes: Routes = [{path: 'create', component: CreateComponent},
  {path: 'index', component: IndexComponent}]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
