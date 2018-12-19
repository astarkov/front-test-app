import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reg-form1',
  templateUrl: './reg-form1.component.html',
  styleUrls: ['./reg-form1.component.scss']
})
export class RegForm1Component implements OnInit {
  @ViewChild('loginForm') public loginForm: NgForm;
  public first_name: string;
  public email: string;
  constructor(private router: Router) { }

  ngOnInit() {


  }
  public onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Valid',this.loginForm);
      this.router.navigate(['/registration/step2'], { queryParams: { first_name: this.first_name, email: this.email  } });
      // this.router.navigate(['/heroes', { id: 'heroId', foo: 'foo' }]);

    }else{
      console.log('Form inValid',this.loginForm);
    }
  }

}
