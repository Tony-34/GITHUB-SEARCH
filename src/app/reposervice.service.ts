import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repo } from './repo';
  @Injectable({
      providedIn:'root'
  })
export class ReposerviceService {
    repo:Repo[];


constructor(private http:HttpClient) { }
getRepo(searchItem:string):Observable<any>{
 return this.http.get(environment.apiUrl + searchItem + '/repos?' + environment.gitToken)
}

}