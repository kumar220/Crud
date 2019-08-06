import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-id-add',
  templateUrl: './emp-id-add.component.html',
  styleUrls: ['./emp-id-add.component.css']
})
export class EmpIdAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.angForm = this.fb.group({
      user_name: ['', Validators.required],
      person_name: ['', Validators.required],
      employee_id_number: ['', Validators.required]
    });
  }
}
