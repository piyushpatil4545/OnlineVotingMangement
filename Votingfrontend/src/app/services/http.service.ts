import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Admin, Candidate, ElectionManager } from '../models/college';
import { AdminForm } from 'src/app/admin';
import { VoterForm } from 'src/app/admin';
import { Voter } from '../models/college';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

private server: string = 'http://localhost:8080/';

constructor(private http: HttpClient) { }

public loginAdmin(admin :AdminForm) : Observable<Admin>
{
  return this.http.post<Admin>(this.server+"admins/login", admin);
}

  
public loginVoter(voter :VoterForm) : Observable<Voter>
{
return this.http.post<Voter>(this.server+"voters/login",voter);
}

fetchVoterList(): Observable<Voter[]>
{
  return this.http.get<Voter[]>(this.server+"voters");
}
fetchVoterByName(name : string): Observable<Voter>
{
  return this.http.get<Voter>(this.server+"voters/"+name);
}
deleteVoterByName(name : string):Observable<Voter>
{
  return this.http.delete<Voter>(this.server+"voters/"+ name);
}; 
fetchCandidateList(): Observable<Candidate[]>
{
  return this.http.get<Candidate[]>(this.server+"candidates");
}
fetchTopPresidentCandidate(): Observable<Candidate>
{
  return this.http.get<Candidate>(this.server+"candidates/top/result/PRESIDENT");
}
fetchTopVicePresidentCandidate():Observable<Candidate>
{
  return this.http.get<Candidate>(this.server+"candidates/top/result/VICE_PRESIDENT");
}
fetchTopTreasurerCandidate():Observable<Candidate>
{
  return this.http.get<Candidate>(this.server+"candidates/top/result/TREASURER");
}
fetchTopViceEventsCandidate():Observable<Candidate>
{
  return this.http.get<Candidate>(this.server+"candidates/top/result/VP_EVENTS");
}

candidateresultList():Observable<Candidate[]>
{
  return this.http.get<Candidate[]>(this.server+"candidates/vote/result");
}
fetchCandidateByName(name : string): Observable<Candidate>
{
  return this.http.get<Candidate>(this.server+"candidates/"+name);
}

voteCandidateById(candidate_id: number): Observable<Candidate>{
   return this.http.get<Candidate>(this.server+"candidates/vote/"+candidate_id);
}

fetchCandidateByPosition(position : string): Observable<Candidate[]>
{
  return this.http.get<Candidate[]>(this.server+"candidates/position/"+position );
}
fetchAllPosition():Observable<string[]>
{
  return this.http.get<string[]>(this.server+"candidates/getposition");
}
registerCandidate(candidate :Candidate):Observable<Candidate>{
  return this.http.post<Candidate>(this.server+"candidates/registercandidate",candidate);
}

addCandidate(candidate: Candidate ):Observable<Candidate>{
  return this.http.post<Candidate>(this.server + "candidates/addcandidate",candidate);
}

addVoter( voter : Voter ):Observable<Voter>{
  return this.http.post<Voter>(this.server + "voters/registervoter",voter);
}


public loginElectionManager(electionmanager :ElectionManager) : Observable<ElectionManager>
{
return this.http.post<ElectionManager>(this.server+"electionmanager/login",electionmanager);
}


deleteCandidateById(candidate_id : number):Observable<Candidate>
{
  return this.http.delete<Candidate>(this.server+"candidates/"+ candidate_id);
}; 

}
