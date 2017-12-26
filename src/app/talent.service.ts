import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Talent } from './talent';
import { TALENTS } from './talents.data';

@Injectable()
export class TalentService {

  constructor() { }

  getTalents(): Talent[] {
    return TALENTS;
  }


}
