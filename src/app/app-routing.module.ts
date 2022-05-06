import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCasePageComponentComponent } from './modules/show-case/show-case-page-component/show-case-page-component.component';

const routes: Routes = [{
  path:"",
  component: ShowCasePageComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
