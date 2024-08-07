import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Candidate {
  id: number;
  name: string;
  photo: string;
  votes: number;
}

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  private candidates: Candidate[] = [
    { id: 1, name: 'Candidate 1', photo: 'assets/c1.png', votes: 0 },
    { id: 2, name: 'Candidate 2', photo: 'assets/c2.png', votes: 0 },
    { id: 3, name: 'Candidate 3', photo: 'assets/c3.png', votes: 0 }
  ];

  private candidateUpdated = new Subject<Candidate[]>();

  getCandidates() {
    return [...this.candidates];
  }

  gettingCndidates(){
    return [...this.candidates]
  }

  gettingCandidatesUpdated(){
    return this.candidateUpdated.asObservable();
  }

  getCandidatesUpdateListener() {
    return this.candidateUpdated.asObservable();
  }

  voteForCandidate(candidateId: number) {
    const candidate = this.candidates.find(c => c.id === candidateId);
    if (candidate) {
      candidate.votes++;
      this.candidateUpdated.next([...this.candidates]);
    }
  }

  constructor() { }
}
