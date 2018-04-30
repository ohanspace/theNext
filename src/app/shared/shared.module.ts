import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [CommonModule, FormsModule, CustomFormsModule, FlexLayoutModule]
})
export class SharedModule { }
