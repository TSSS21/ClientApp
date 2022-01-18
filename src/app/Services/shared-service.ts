import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user_data: any;
  private state: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public state$: Observable<string> = this.state.asObservable();
  readonly ApiUrl = "https://reqres.in/api";
  constructor(private http: HttpClient) { }
  getList(): Observable<[]> {
    debugger
    return this.http.get<any>(this.ApiUrl +'/users')
  }

  login(data:any){
    debugger
    return this.http.post(this.ApiUrl +'/login',data.payload)
  }
  getUserById(id){
    debugger
    return this.http.get(this.ApiUrl +'/users'+'/'+id.payload)
  }
}
