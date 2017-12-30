import { Component, OnInit, OnDestroy } from '@angular/core';
import { TalentFeature} from '../talent-feature';
import { Talent } from '../talent';
import { TALENTS } from '../talents.data';
import { TalentService } from '../talent.service';
import { DomainService } from '../domain.service';
import { FilterService } from '../filter.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {
  selectedTalent: Talent;
  talents: Talent[];
  talentsOrigin: Talent[];

  domainsSubscription: Subscription;
  filtersSubscription: Subscription;
  
  selectedDomains: string[] = [];
  selectedFilters: string[] = [];
  useFilters: boolean = false;
  useDomains: boolean = true; 

  constructor(
    private talentService: TalentService, 
    private domainService: DomainService,
    private filterService: FilterService) { 
    
    this.getTalents();

    this.domainsSubscription = domainService.domainUpdated$.subscribe( (domains) => {
      this.selectedDomains = domains;
      this.selectedTalent = null;
      this.selectedFilters = [];
      this.useFilters = false; 
      this.useDomains = true; 
      
      this.getDomainsTalents();
      
    });
  
    this.filtersSubscription = filterService.filtersUpdated$.subscribe( (filter) => {
      let filterName = filter.value;
      
      this.selectedDomains = [];
      this.talents = this.useDomains ? [] : this.talents;

      this.useFilters = true; 
      this.useDomains = false; 

      if (this.selectedFilters.includes(filterName)) {
        this.removeFilteredTalents(filterName);
        this.selectedFilters = this.selectedFilters.filter( f => f !== filterName);
      } else {
        this.addFilteredTalents(filterName);
        this.selectedFilters = this.selectedFilters.concat(filterName);
      }

    });

  }

  ngOnInit() {
    this.initSelectedDomains();
    this.getDomainsTalents();
  }
 
  ngOnDestroy() {
    this.domainsSubscription.unsubscribe();
    this.filtersSubscription.unsubscribe();
  }

  onSelect(talent: Talent): void {
    this.selectedTalent = this.selectedTalent === talent ? null : talent;
  }

  getTalents(): void {
    this.talentsOrigin = this.talents = this.talentService.getTalents();
  }

  getDomainsTalents(): void {
    this.talents = this.selectedDomains.reduce( (array:Talent[], domain:string) => {
      return array.concat(this.talentsOrigin.filter( (talent:Talent) => talent.domain === domain ));
      }, []); 
  }

  addFilteredTalents(filter: string): void {
    this.talents = this.talents.concat(this.talentsOrigin.filter(talent => (talent.name === filter) || (talent.domain === filter) ));
  }


  removeFilteredTalents(filter: string): void {
    this.talents = this.talents.filter(talent => (talent.name !== filter) && (talent.domain !== filter));
  }

  initSelectedDomains(): void {
    this.selectedDomains = this.talentsOrigin.map(talent => talent.domain).reduce((array, domain) => array.includes(domain) ? array : [...array, domain], []);
  }
  
}
