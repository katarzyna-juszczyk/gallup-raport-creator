import { Injectable } from '@angular/core';
import { DOMAINS } from './domains.data';
import { Domain } from './Domain';

@Injectable()
export class DomainService {

  constructor() { }

  getDomains(): Domain[] {
    return DOMAINS;
  }


}
