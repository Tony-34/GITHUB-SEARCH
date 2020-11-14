import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  constructor(private http: HttpClient) { }

  getGithubPublicRepositories() {
    const username = 'Tony-34';
    return this.http.get('https://api.github.com/users/Tony-34/repos');
  }
}
