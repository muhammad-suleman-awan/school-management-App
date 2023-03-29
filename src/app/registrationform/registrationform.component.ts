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

  studentObj: StudentModel= new StudentModel;
  studentList:any;
  btnUpdateShow!: boolean | false;
  btnSaveShow!: boolean | true;

  constructor(private formBuilder:FormBuilder, private api:ApiService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  NgOnInit(): void{
    this.studentValue = this.formBuilder.group({
      name:[''],
      
      email:[''],
      city:[''],
      mobile:['']
    }) 
    this.studentList();
  }


AddStudent(){

  this.studentObj.name = this.studentValue.value.name;
  this.studentObj.id = this.studentValue.value.id;
  this.studentObj.email = this.studentValue.value.email;
  this.studentObj.city = this.studentValue.value.city;
  this.studentObj.mobile = this.studentValue.value.mobile;

  this.api.postStudent(this.studentObj).subscribe({next: (v: any) =>{
    console.log(v)
  },
  error: (e: any) => {
    console.log(e)
    alert("Error")
  },
complete: () => {
  console.log('complete')
  alert("Student Record added!")
  this.studentList();
  this.studentValue.reset();
}})
}

AllStudent(){
  this.api.getStudent().subscribe(res => {
    this.AllStudent = res;
  })
}

EditStudent(data:any){
  this.studentValue.controls['name'].setValue(data.name);
  this.studentValue.controls['email'].setValue(data.email);
  this.studentValue.controls['city'].setValue(data.city);
  this.studentValue.controls['mobile'].setValue(data.mobile);
  // this.studentValue.id = data.id;
  this.UpdateShowBtn();
}




DeleteStudent(data:any){
  this.api.deleteStudent(data.id).subscribe(res => {
    alert("Record Deleted");
    this.studentList();
  })

}

UpdateStudent(): void{
  this.studentObj.name = this.studentValue.value.name;
  this.studentObj.id = this.studentValue.value.id;
  this.studentObj.email = this.studentValue.value.email;
  this.studentObj.city = this.studentValue.value.city;
  this.studentObj.mobile = this.studentValue.value.mobile;
  this.api.putStudent(this.studentObj,this.studentObj.id).subscribe(res => {
    alert("Data Updated");
    this.studentList();
    
    this.SaveShowBtn();
  })


}





UpdateShowBtn()
  {
    this.btnUpdateShow = true;
    this.btnSaveShow = false;
  }
  SaveShowBtn()
  {
    this.btnUpdateShow = false;
    this.btnSaveShow = true;
  }

}















