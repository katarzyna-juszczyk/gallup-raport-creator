import { Component, OnInit } from '@angular/core';
import { Domain } from '../domain';
import { DOMAINS } from '../domains.data';
import { DomainService } from '../domain.service';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})

export class DomainsComponent implements OnInit {
  selectedDomain: Domain;
  domains: Domain[];
  
  constructor( private domainService: DomainService) { }

  ngOnInit() {
    this.getDomains();
  }

  getDomains(): void {
    this.domains = this.domainService.getDomains();
  }
}
