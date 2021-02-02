export class College {
}

export class Admin {
    admin_id: string;
    email: string;
    name: string;
}

export class Student {
    name: string;
    email: string;
}

export class Candidate {
    email:String;
    name:String;
    gender:String;
    candidate_id:string;
    dob:String;
    party:String;
    password:String;
    votes:String;
    details:String;
    position:String;
}

export class Voter {
    email:string;
    name:String;
    gender:String;
    id:String;
    dob:String;
    status:String;
    password:string;
    
}
   


export class ElectionManager {
    election_id:number;
    name:String;
    email:string;
    election_date:String;
    start_time:String;
    end_time:String;
    password:String;
}