import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { RepoComponent } from './repo/repo.component';
import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './profile/profile.component';

const routes:Routes =[
  {path:"components",component:ComponentsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"repo",component:RepoComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class Routing { }
