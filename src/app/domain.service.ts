import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DomainService {

    private domainUpdatedSource = new Subject <any> ();
    
    domainUpdated$ = this.domainUpdatedSource.asObservable();
    
    onUpdateSelectedDomains(domains: string[]) {
        this.domainUpdatedSource.next(domains);
    }

}
