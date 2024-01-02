import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-hotel-add-edit',
  templateUrl: './hotel-add-edit.component.html',
  styleUrls: ['./hotel-add-edit.component.scss']
})
export class HotelAddEditComponent {

  empForm: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(
    private _fb: FormBuilder,
  ) {
    this.empForm = this._fb.group({});
  }

  ngOnInit(): void {
  }

  onFormSubmit() {

  }

}
