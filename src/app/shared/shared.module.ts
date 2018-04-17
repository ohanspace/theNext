import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule
  ],
  declarations: [],
  exports: [CommonModule, FormsModule, CustomFormsModule]
})
export class SharedModule { }
