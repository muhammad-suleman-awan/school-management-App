import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _hhtp: HttpClient) { }
  
  // POST GET PUT DELETE Method
poststudent(data:any){
  return this._hhtp.post<any>("http://localhost:3000/posts", data).pipe(
    map(
      (res => {
        return res;
      })))  
}

getstudent(){
  return this._hhtp.get<any>("http://localhost:3000/posts").pipe(
    map(
      (res => {
        return res;
      })))  
}

putstudent(data:any,id:number){
  return this._hhtp.put<any>("http://localhost:3000/posts/"+id, data).pipe(
    map(
      (res => {
        return res;
      })))  
}

deletestudent(id:number){
  return this._hhtp.delete<any>("http://localhost:3000/posts/"+id).pipe(
    map(
      (res => {
        return res;
      })))  
}

}
