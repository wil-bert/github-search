import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../github-search-s/github-search.service';
import { Profile } from '../../profile'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[GithubSearchService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:Profile;
  username:string;

  constructor(private GithubSearchService:GithubSearchService) {
  }
  findProfile(){
    this.GithubSearchService.updateProfile(this.username);
    this.GithubSearchService.profileRequest()
    this.profile=this.GithubSearchService.profile
    }
  ngOnInit(): void {
  }

}
