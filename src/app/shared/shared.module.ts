import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { PipeFormatPipe } from '../MyPipe/pipe-format.pipe';

@NgModule({
  declarations:
   [
    PipeFormatPipe

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule
  ],exports:[
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    PipeFormatPipe


  ]
})
export class SharedModule { }
