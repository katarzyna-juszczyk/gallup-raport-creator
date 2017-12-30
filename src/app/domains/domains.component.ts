import { Component, OnInit, Output } from '@angular/core';
import { TalentService } from '../talent.service';
import { DomainService } from '../domain.service';
import { FilterService } from '../filter.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {
  domains: string[];
  selectedDomains: string[];
  filtersSubscription: Subscription;
  inactive: boolean = false;
  
  constructor(
    private talentService: TalentService, 
    private domainService: DomainService,
    private filterService: FilterService) {
  
    this.filtersSubscription = filterService.filtersUpdated$.subscribe( (filter) => {
      this.selectedDomains = [];
      this.inactive = true;
    });

  }

  ngOnInit() {
    this.domains = this.talentService.getDomains();
    this.selectedDomains = this.domains;
  }

  onUpdateSelected(domain: string) {
    this.selectedDomains = this.selectedDomains.includes(domain) ? this.selectedDomains.filter(d => d !== domain) : this.selectedDomains.concat(domain);
    this.domainService.onUpdateSelectedDomains(this.selectedDomains);
    this.inactive = false;
  }

  isSelected(domain: string) {
    return this.selectedDomains.includes(domain);
  }


}
