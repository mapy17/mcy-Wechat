import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { AccordionModule, DataTableModule, SharedModule, PaginatorModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    AccordionModule,
    DataTableModule,
    SharedModule,
    PaginatorModule
  ],
  declarations: [ ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    AccordionModule,
    DataTableModule,
    SharedModule,
    PaginatorModule
  ]
})

export class MySharedModule { }
