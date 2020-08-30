import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsComponent } from './components/components.component';
import { RepoComponent } from './repo/repo.component';
import { ProfileComponent } from './profile/profile.component';
import { GithubSearchService } from './github-search-s/github-search.service';
import { RoutingComponent } from './routing/routing.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    RepoComponent,
    ProfileComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,



  ],
  providers: [GithubSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
