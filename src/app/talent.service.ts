import { Injectable } from '@angular/core';
import { Talent } from './talent';
import { TALENTS } from './talents.data';

@Injectable()
export class TalentService {

  constructor() { }

  getDomains(): string[] {
    return TALENTS.map(talent => talent.domain).reduce((array, domain) => array.includes(domain) ? array : [...array, domain], []);
  }

  getTalents(): Talent[] {
    return TALENTS;
  }

  getTalent(name): Talent {
    return this.getTalents().find( talent => talent.name === name);
  }

  getDomainTalents(domain:string): Talent[] {
   return this.getTalents().filter( (talent) => talent.domain === domain );
  }
}
