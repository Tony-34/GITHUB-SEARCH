import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubReposService } from './github-repos.service';
import {  Subscription  } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Github';

 gitHubRepos: any = [];
  mySubscription: Subscription;

  constructor(private gitHubService: GithubReposService){
  
  }
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
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
