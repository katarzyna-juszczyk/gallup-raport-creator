import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DomainService {

    // Observable string sources  
    private domainUpdateDSource = new Subject < string > ();
    
    // Observable string streams  
    domainUpdated$ = this.domainUpdateDSource.asObservable();
    
    // Service message commands  
    onUpdateSelectedDomains() {
        this.domainUpdateDSource.next();
    }

}
