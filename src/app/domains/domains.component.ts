import { Component, OnInit } from '@angular/core';
import { TalentService } from '../talent.service';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {
  domains: string[];
  selectedDomain: string;

  constructor(private talentService: TalentService) { }

  ngOnInit() {
    console.log('domains init');
    console.log(this.talentService.getDomains());
    this.domains = this.talentService.getDomains();
  }

  onSelect(domain: string) {
    this.selectedDomain = domain;
  }
}
