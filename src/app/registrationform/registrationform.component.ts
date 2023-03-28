import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { StudentModel } from './student.model';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent implements OnInit {

  
   
  studentValue!: FormGroup;

  studentObj:StudentModel= new StudentModel;
  studentList:any=[];

  constructor(private formBuilder:FormBuilder, private api:ApiService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  NgOnInit(): void{
    this.studentValue = this.formBuilder.group({
      name:[''],
      id:[''],
      email:[''],
      city:[''],
      mobile:['']
    }) 
    this.getStudent();
  }


AddStudent(){

  this.studentObj.name = this.studentValue.value.name;
  this.studentObj.id = this.studentValue.value.id;
  this.studentObj.email = this.studentValue.value.email;
  this.studentObj.city = this.studentValue.value.city;
  this.studentObj.mobile = this.studentValue.value.mobile;

  this.api.poststudent(this.studentObj).subscribe({next: (v: any) =>{
    console.log(v)
  },
  error: (e: any) => {
    console.log(e)
    alert("Error")
  },
complete: () => {
  console.log('complete')
  alert("Student Record added!")
  this.getStudent();
  this.studentValue.reset();
}})

}

getStudent(){
  this.api.getstudent().subscribe(res =>{
    this.studentList = res;
  })

}
deleteStudent(data:any){
  this.api.deletestudent(data ).subscribe({next: (v: any) =>{
    console.log(v)
  },
  error: (e: any) => {
    console.log(e)
    alert("Error")
  },
complete: () => {
  console.log('Student Record deleted')
  alert("Student Record Deleted!")
  this.getStudent();
  this.studentValue;
}})
}

}















