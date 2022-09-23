import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from './card-form/card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardPlaceholderComponent } from './card-placeholder/card-placeholder.component';
@NgModule({
  declarations: [
    CardFormComponent,
    CardPlaceholderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CardFormComponent,
    CardPlaceholderComponent
  ]
})
export class ComponentsModule { }
