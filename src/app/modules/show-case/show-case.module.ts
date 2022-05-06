import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCasePageComponentComponent } from './show-case-page-component/show-case-page-component.component';
import { UiBlockItemComponent } from './ui-block-item/ui-block-item.component';
import { UiItemComponent } from './ui-block-item/ui-item/ui-item.component';



@NgModule({
  declarations: [
    ShowCasePageComponentComponent,
    UiBlockItemComponent,
    UiItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShowCaseModule { }
