import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DomainService {

    // Observable string sources  
    private domainUpdatedSource = new Subject <any> ();
    
    // Observable string streams  
    domainUpdated$ = this.domainUpdatedSource.asObservable();
    
    // Service message commands  
    onUpdateSelectedDomains(domains: string[]) {
        this.domainUpdatedSource.next(domains);
    }

}
