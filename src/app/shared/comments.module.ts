import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CommentsComponent
  ],
  exports: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CommentsModule { }
