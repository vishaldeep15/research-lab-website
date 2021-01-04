import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { PublicationsComponent } from './publications/publications.component';
import { TeamComponent } from './team/team.component';
import { TeachingComponent } from './teaching/teaching.component';
import { HarcComponent } from './research/harc/harc.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'research/harc', component: HarcComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'teaching', component: TeachingComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
