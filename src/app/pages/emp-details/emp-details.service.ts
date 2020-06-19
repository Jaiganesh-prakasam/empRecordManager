import { Injectable } from '@angular/core';
export class EmpDetails {
  empGeneral: EmpGeneral;
  empContact: EmpContact;
  empSkill: EmpSkill[];
  empExperience: EmpExperience[];
}

export class EmpGeneral {
  firstName: string;
  lastName: string;
  fullName: string;
  dob: string;
  age: number;
}

export class EmpContact {
  email: string;
  phone: string;
  socialInfo: {
    url: string;
    type: string;
  };
}

export class EmpSkill {
  skill: string;
  rate: number;
}

export class EmpExperience {
  companyName: string;
  location: {
    city: string;
    country: string;
  };
  companyUrl: string;
  role: string;
  fromDate: string;
  toDate: string;
  experience: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmpDetailsService {
  empGeneral = new EmpGeneral();
  empContact = new EmpContact();
  empSkill = [new EmpSkill()];
  empExperience = [new EmpExperience()];
  constructor() { }
}
