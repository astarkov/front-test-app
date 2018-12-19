import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {DataServiceService} from '../data-service.service';
import {Validation} from '../validation';
import {Placeholder} from '../placeholder';

@Component({
  selector: 'app-reg-form1',
  templateUrl: './reg-form1.component.html',
  styleUrls: ['./reg-form1.component.scss']
})
export class RegForm1Component implements OnInit {
  @ViewChild('loginForm') public loginForm: NgForm;
  // public first_name: string;
  public step_1: string;
  public email: string;
  private dataJson: any;
  private validation: Validation;
  public placeholders: Placeholder = {FIRSTNAME:"", EMAIL: ""};
  public userName: { value: string, error: boolean, errorDescription: string };
  public userEmail: { value: string, error: boolean, errorDescription: string };
  constructor(private router: Router, private dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.initFieldsAccount();
    this.dataServiceService.getJSON().subscribe(data => {
      this.dataJson = data.FORMS;
      this.validation = data.FORMS.VALIDATION;
      this.step_1 = data.FORMS.BUTTONS.STEP_1;
      this.placeholders = data.FORMS.PLACEHOLDERS;
    }, error => console.log(error));
  }
  private initFieldsAccount(){
    this.userName = {
      value: '',
      error: false,
      errorDescription: '',
    };
    this.userEmail = {
      value: '',
      error: false,
      errorDescription: '',
    };
  }
  public onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/registration/step2'], { queryParams: { first_name: this.userName.value, email: this.userEmail.value  } });
    }else{
      this._validateFields();
    }
  }
  private _validateFields(){
    this.userName.error = this.loginForm.controls.uname1.invalid;
    this.userName.errorDescription = this.userName.error ?
        (this.loginForm.controls.uname1.errors.required ? this.validation.REQUIRED :
          this.validation.INVALID) : '';

    this.userEmail.error = this.loginForm.controls.email.invalid;
    this.userEmail.errorDescription = this.userEmail.error ?
      (this.loginForm.controls.email.errors.required ? this.validation.REQUIRED :
        this.validation.INVALID) : '';
  }

}
