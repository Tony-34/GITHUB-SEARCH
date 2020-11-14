import { Component } from '@angular/core';
import { GithubReposService } from './github-repos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements ngOnInit{
  title = 'Github';

 gitHubRepos: any = [];
  constructor(private gitHubService: GithubReposService){
  
  }

  ngOnInit(): void {
    this.getRepos();
  }
  getRepos(){
    this.gitHubService.getGithubPublicRepositories().subscribe(repos => {
      this.gitHubRepos = repos;
      // console.log(JSON.stringify(repos));
    });
  }
}
