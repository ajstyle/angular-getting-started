import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-step-wizard',
  templateUrl: './step-wizard.component.html',
  styleUrls: ['./step-wizard.component.scss']
})
export class StepWizardComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      address : ['' , Validators.required ],
      mobileNo : ['', Validators.required]
    });

  }

}
