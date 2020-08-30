import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {


  constructor(private httpClient:HttpClient) { }

  getUser(){
    return this.httpClient.get('https://api.github.com/users/${this.username}');
  }

  getRepos(){
    return this.httpClient.get('https://api.github.com/users/${this.username}/repos');
  }

  updateUsername(username: string){

  }

}
