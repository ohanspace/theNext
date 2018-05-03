import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CustomFormsModule,
    FlexLayoutModule,
    CustomMaterialModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CustomFormsModule,
    FlexLayoutModule,
    CustomMaterialModule
  ]
})
export class SharedModule {}
