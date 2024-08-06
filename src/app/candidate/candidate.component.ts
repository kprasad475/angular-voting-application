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
  private candidatesSub:Subscription

  ngOnDestroy(): void {
      
  }
  ngOnInit(): void {
      
  }

}
