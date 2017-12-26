import { Injectable } from '@angular/core';

import { Talent } from './talent';
import { TALENTS } from './talents.data';

@Injectable()
export class TalentService {

  constructor() { }

  getTalents(): Talent[] {
    return TALENTS;
  }

  getTalent(name): Talent {
    return this.getTalents().find( talent => talent.name === name);
  }
}
