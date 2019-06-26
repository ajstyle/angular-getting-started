import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [MatStepperModule, MatFormFieldModule, MatToolbarModule, MatInputModule],
  exports: [MatStepperModule, MatFormFieldModule, MatToolbarModule, MatInputModule],
})
export class MaterialModule {}
