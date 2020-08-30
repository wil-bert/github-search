import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RepoComponent } from './repo/repo.component';
import { ProfileComponent } from './profile/profile.component';
import { ComponentsComponent } from './components/components.component';

const routes:Routes =[
  {path:"components",component:ComponentsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"repo",component:RepoComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
