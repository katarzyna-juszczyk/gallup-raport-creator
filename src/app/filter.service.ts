import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FilterService {

  private filterUpdatedSource = new Subject<any>();

  filtersUpdated$ = this.filterUpdatedSource.asObservable();

  onFilterAdded(filter: string) {
    this.filterUpdatedSource.next(filter);
  }

  onFilterRemoved(filter: string) {
    this.filterUpdatedSource.next(filter);
  }

}
