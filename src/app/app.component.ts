import { Component, OnInit, OnDestroy } from '@angular/core';
import { GitUser } from './git-user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  user:GitUser[] =[]

//  gitHubRepos: any = [];
//   mySubscription: Subscription;

  constructor(private gitService:Githubservice){
  
  }
//   ngOnDestroy(): void {
//     this.mySubscription.unsubscribe();
// }

  ngOnInit() {
    
  }
  // getRepos(){
  //   this.gitHubService.getGithubPublicRepositories().subscribe(repos => {
  //     this.gitHubRepos = repos;
  //     // console.log(JSON.stringify(repos));
  //   });
  // }


  
}
