import {Component, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-reg-form2',
  templateUrl: './reg-form2.component.html',
  styleUrls: ['./reg-form2.component.scss']
})
export class RegForm2Component implements OnInit {
  @ViewChild('loginForm') public loginForm: NgForm;
  public first_name: string;
  public last_name: string;
  public email: string;
  public password: string;
  public selectProduct: string;
  private querySubscription: Subscription;
  private dataJson: any;
  products: string[] = [
    'USA',
    'Columbia'
  ];
  constructor(private route: ActivatedRoute, private router: Router, private dataServiceService: DataServiceService) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.first_name = queryParam['first_name'];
        this.email = queryParam['email'];
      }
    );
      console.log('this.first_name: ',this.first_name);
      console.log('this.email: ',this.email);
  }

  ngOnInit() {

  }
  public onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Valid',this.loginForm);
      console.log('selectProduct',this.selectProduct);

    }else{
      console.log('Form inValid',this.loginForm);
    }
  }
}
