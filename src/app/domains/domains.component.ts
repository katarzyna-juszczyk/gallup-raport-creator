import { Component, OnInit, Output } from '@angular/core';
import { TalentService } from '../talent.service';
import { DomainService } from '../domain.service';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {
  domains: string[];
  selectedDomains: string[] = [];

  constructor(private talentService: TalentService, private domainService: DomainService) {}

  ngOnInit() {
    this.domains = this.talentService.getDomains();
  }

  onUpdateSelected(domain: string) {
    this.selectedDomains = this.selectedDomains.includes(domain) ? this.selectedDomains.filter(d => d !== domain) : this.selectedDomains.concat(domain);
    this.domainService.onUpdateSelectedDomains();
  }

  isSelected(domain: string) {
    return this.selectedDomains.includes(domain);
  }


}
