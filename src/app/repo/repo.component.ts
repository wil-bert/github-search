import { Component, OnInit } from '@angular/core';

import { GithubSearchService } from '../../app/github-search-s/github-search.service';
import { Repo } from '../repo;


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  providers:[GithubSearchService],
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  username:string;
  repo:Repo;

  constructor(private GithubSearchService:GithubSearchService) {
  }
    findProfile(){
      this.GithubSearchService.updateProfile(this.username);
      this.GithubSearchService.repoRequest();
      this.repo=this.GithubSearchService.repo

   }

  ngOnInit(): void {
  }

}
