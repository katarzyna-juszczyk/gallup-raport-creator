import { Component, OnInit } from '@angular/core';
import { TagInputModule } from 'ngx-chips';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TalentService }  from '../talent.service';
import { FilterService }  from '../filter.service';
import { DomainService }  from '../domain.service';
import { Talent } from '../talent';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';

  TagInputModule.withDefaults({
    tagInput: {
        placeholder: 'Add new tag'
    }
  });



@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  selectedFilters: string[] = [];
  availableFilters: string[] = [];
  domainsSubscription: Subscription;
  inactive: boolean = true;

  constructor(
    private talentService: TalentService, 
    private filterService: FilterService,
    private domainService: DomainService) { 
      this.domainsSubscription = domainService.domainUpdated$.subscribe( (domains) => {
        this.selectedFilters = [];
        this.inactive = true;
      });
    }
  
 

  ngOnInit() {
    let talents: Talent[] = this.talentService.getTalents();
    let domains: string[] = this.talentService.getDomains();
    this.availableFilters = this.availableFilters.concat(talents.map(talent => talent.name)).concat(domains);
  }

  onInputFocused(e) {
    this.inactive = false;
  }

  onFilterAdded(item) {
      this.filterService.onFilterAdded(item);
  }

  onFilterRemoved(item) {
    this.filterService.onFilterRemoved(item);
  }

}
