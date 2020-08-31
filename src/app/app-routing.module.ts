import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { ComponentsComponent } from './components/components.component';
import { RepoComponent } from './repo/repo.component';


const routes:Routes =[
  {path:"components",component:ComponentsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"repo",component:RepoComponent},
  {path:"",redirectTo:"/components",pathMatch:"full"}
]

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],

  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
