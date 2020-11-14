import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { GithubReposService } from '../github-repos.service';
import { NgForm } from '@angular/forms';
  
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchItem:GithubReposService;
  @Output() searchUser = new EventEmitter<any>();
  constructor() { }

  showUser(form: NgForm){
    this.searchUser.emit(this.searchItem)
    form.resetForm()
  }

  ngOnInit(): void {
  }

}
