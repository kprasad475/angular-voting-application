import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotingComponent } from './voting/voting.component';
import { CandidateComponent } from './candidate/candidate.component';

const routes: Routes = [{ path: '', redirectTo: '/candidate', pathMatch: 'full' }, // Redirect to post list
  { path: 'voting', component: VotingComponent },
{path:'candidate',component:CandidateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
