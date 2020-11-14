import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {
   apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getGithubPublicRepositories() {
    const username = 'username';
    return this.http.get('${this.apiUrl}?per_page=10');

  }

//   getGithubPublicRepositories(username: string) {
    
//     return this.http.get('${this.apiUrl}/${username}');

// }
}
