import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup,FormBuilder,Validator,Validators } from '@angular/forms';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {
adminSignInForm: FormGroup;
errMsg:string;


  constructor(private formBuilder: FormBuilder,
    private authenticationService:AuthenticationService,
    private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
  	this.adminSignInForm=this.formBuilder.group({
email:['',[Validators.required,Validators.email]],
password:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z{6,}]/ )]]

  	});
  }
  // form: NgForm
onAuth(){

	const email= this.adminSignInForm.get('email').value;
	const password= this.adminSignInForm.get('password').value;
	console.log(email+'/n'+password);
	this.authenticationService.signInUser(email,password).then(
    ()=>{
      // console.log('OKay?!');
      this.router.navigate(['/admin','dashboard']);
    },
    (error)=>{
      this.errMsg=error;
      alert(this.errMsg);

    }

    );
	
}

}
