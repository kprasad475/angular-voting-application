import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VotingService,Candidate } from '../voting.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrl: './candidate.component.css'
})
export class CandidateComponent implements OnInit,OnDestroy {

  candidates:Candidate[]=[];
  private candidatesSub:Subscription;

  constructor(private service:VotingService){

  }

  ngOnDestroy(): void {
    this.candidatesSub.unsubscribe();

  }
  ngOnInit(): void {
    this.candidates = this.service.getCandidates();
    this.candidatesSub = this.service.getCandidatesUpdateListener()
      .subscribe((candidates: Candidate[]) => {
        this.candidates = candidates;
      });
  }

  onVote(candidateId: number): void {
    this.service.voteForCandidate(candidateId);
  }

}
