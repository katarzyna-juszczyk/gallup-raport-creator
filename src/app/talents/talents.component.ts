import { Component, OnInit, OnDestroy } from '@angular/core';
import { TalentFeature} from '../talent-feature';
import { Talent } from '../talent';
import { TALENTS } from '../talents.data';
import { TalentService } from '../talent.service';
import { DomainService } from '../domain.service';
import { FilterService } from '../filter.service';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';
import { TalentComponent } from '../talent/talent.component';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {
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
    private filterService: FilterService,
    public dialog: MatDialog) { 
    
    this.getTalents();
    this.setClassNames();
    
    this.domainsSubscription = domainService.domainUpdated$.subscribe( (domains) => {
      this.selectedDomains = domains;
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

      this.onUpdateSelected(this.talents);
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

  onUpdateSelected(talents: Talent[]) {
    this.talentService.onUpdateSelectedTalents(talents);
  }

  getTalents(): void {
    this.talentsOrigin = this.talents = this.talentService.getTalents();
  }

  getDomainsTalents(): void {
    this.talents = this.selectedDomains.reduce( (array:Talent[], domain:string) => {
      return array.concat(this.talentsOrigin.filter( (talent:Talent) => talent.domain === domain ));
      }, []); 
    this.onUpdateSelected(this.talents);
  }

  addFilteredTalents(filter: string): void {
    this.talents = this.talents
                    .concat(this.talentsOrigin
                      .filter(talent => ((talent.name === filter) || (talent.domain === filter)) && !this.talents.includes(talent) ));
  }

  removeFilteredTalents(filter: string): void {
    this.talents = this.talents.filter(talent => (talent.name !== filter) && (talent.domain !== filter));
  }

  initSelectedDomains(): void {
    this.selectedDomains = this.talentsOrigin.map(talent => talent.domain).reduce((array, domain) => array.includes(domain) ? array : [...array, domain], []);
  }
  
  setClassNames(): void {
    this.talentsOrigin = this.talentsOrigin.map((talent) => {
      switch (talent.domain) {
        case "Myślenie strategiczne":
          talent.className = "theme-red";
          break;
        case "Działanie":
          talent.className = "theme-purple";
          break;
        case "Budowanie relacji":
          talent.className = "theme-blue";
          break;
        case "Wywieranie wpływu":
          talent.className = "theme-yellow";
          break;

      };
      return talent;
    });
  }

  openFeaturesDialog(selectedTalent: Talent): void {
     const dialogRef = this.dialog.open(TalentComponent, {data: { talent: selectedTalent }});
  }

}
