import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpIdAddComponent } from './emp-id-add/emp-id-add.component';
import { EmpIdEditComponent } from './emp-id-edit/emp-id-edit.component';
import { EmpIdGetComponent } from './emp-id-get/emp-id-get.component';

const routes: Routes = [
  {
    path: 'business/create',
    component: EmpIdAddComponent
  },
  {
    path: 'business/edit/:id',
    component: EmpIdEditComponent
  },
  {
    path: 'business',
    component: EmpIdGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
