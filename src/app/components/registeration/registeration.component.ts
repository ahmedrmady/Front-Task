import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-registeration',
  standalone: true,
  providers:[HttpClientModule],
  imports:[ReactiveFormsModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent implements OnInit {
 registerForm!: FormGroup;
 address!:FormArray;
constructor(private http:HttpClient){}
  ngOnInit(): void {
   this.registerForm =new FormGroup({
    firstname:new FormControl(null,[Validators.required]),
    middlename:new FormControl(null,[Validators.required]),
    lastname:new FormControl(null,[Validators.required]),
    birthdate:new FormControl(null,[Validators.required]),
    mobile:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    address:new FormArray([])

  })
  this.address = ((<FormArray>this.registerForm.get('address')));
  }

  OnSubmit(){
    this.http.post('https://localhost:7035/api/User',{
      firstName:this.registerForm.value.firstname,
      middleName:this.registerForm.value.middlename,
      lastName:this.registerForm.value.lastname,
      mobileNumber:this.registerForm.value.mobile,
      email:this.registerForm.value.email,
      birthDate:this.registerForm.value.birthdate,
      addresses:this.registerForm.value.address,
      
    }).subscribe(
      (response)=>{
        console.log(response)
     },
     (error)=>{
      console.log(error)

     },
     ()=>{
      console.log('compleate')
     }
  )
    console.log(this.registerForm.value)
  }

  OnAddAddress() {
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.registerForm.get('address')).push(control);
  }
}
