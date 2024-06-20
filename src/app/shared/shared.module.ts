import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    FormComponent,
    ErrorComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent,
    ErrorComponent,
    TableComponent
  ]
})
export class SharedModule { }
