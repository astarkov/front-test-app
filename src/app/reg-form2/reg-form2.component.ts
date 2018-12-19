import {Component, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {DataServiceService} from '../data-service.service';
import {Validation} from '../validation';
import {Placeholder} from '../placeholder';
import {Registration} from '../registration';

@Component({
  selector: 'app-reg-form2',
  templateUrl: './reg-form2.component.html',
  styleUrls: ['./reg-form2.component.scss']
})
export class RegForm2Component implements OnInit {
  @ViewChild('loginForm') public loginForm: NgForm;
  public first_name: string;
  public step_2: string;
  public email: string;
  private querySubscription: Subscription;
  private dataJson: any;
  private validation: Validation;
  private registration: Registration;
  public placeholders: Placeholder = {FIRSTNAME:"", LASTNAME:"",PASSWORD:"", COUNTRY:"", EMAIL: ""};
  public userName: { value: string, error: boolean, errorDescription: string };
  public userLastName: { value: string, error: boolean, errorDescription: string };
  public userEmail: { value: string, error: boolean, errorDescription: string };
  public userPassword: { value: string, error: boolean, errorDescription: string };
  public userCountry: { value: string, error: boolean, errorDescription: string };
  public countries: any[] = [
    {name: 'USA'},
    {name: 'Columbia'},
    {name: 'Ukraine'},
  ];
  constructor(private route: ActivatedRoute, private router: Router,
              private dataServiceService: DataServiceService) {
    this.initFieldsAccount();
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.userName.value = queryParam['first_name'];
        this.userEmail.value = queryParam['email'];
      }
    );
  }

  ngOnInit() {

    this.dataServiceService.getJSON().subscribe(data => {
    this.dataJson = data.FORMS;
      this.validation = data.FORMS.VALIDATION;
      this.step_2 = data.FORMS.BUTTONS.STEP_2;
      this.placeholders = data.FORMS.PLACEHOLDERS;
      this.registration = data.REGISTRATION;
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
    this.userLastName = {
      value: '',
      error: false,
      errorDescription: '',
    };
    this.userPassword = {
      value: '',
      error: false,
      errorDescription: '',
    };
    this.userCountry = {
      value: '',
      error: false,
      errorDescription: '',
    };
  }
  public onSubmit() {
    if (this.loginForm.valid) {
      alert(this.registration.SUCCESS);
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

    this.userLastName.error = this.loginForm.controls.uname2.invalid;
    this.userLastName.errorDescription = this.userLastName.error ?
      (this.loginForm.controls.uname2.errors.required ? this.validation.REQUIRED :
        this.validation.INVALID) : '';

    this.userPassword.error = this.loginForm.controls.password.invalid;
    this.userPassword.errorDescription = this.userPassword.error ?
      (this.loginForm.controls.password.errors.required ? this.validation.REQUIRED :
        this.validation.INVALID) : '';

    this.userCountry.error = this.loginForm.controls.country.invalid;
    this.userCountry.errorDescription = this.userCountry.error ?  this.validation.REQUIRED : '';
  }
}
