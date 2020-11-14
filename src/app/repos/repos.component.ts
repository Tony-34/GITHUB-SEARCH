import { Component, OnInit } from '@angular/core';
import {  Repo  } from '../repo'
import { GithubReposService } from '../github-repos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
 repo:Repo[];
  constructor(private repoService:GithubReposService) { }
     getrepository(searchItem:string){
      this.repoService.getRepo(searchItem).subscribe(data=> {
        this.repo = data
        console.log(this.repo)
      });
     }
  ngOnInit(): void {
    this.getrepository('Tony-34')
  }

}
