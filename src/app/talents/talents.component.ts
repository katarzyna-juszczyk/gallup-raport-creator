import { Component, OnInit, OnDestroy } from '@angular/core';
import { TalentFeature} from '../talent-feature';
import { Talent } from '../talent';
import { TALENTS } from '../talents.data';
import { TalentService } from '../talent.service';
import { DomainService } from '../domain.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {
  selectedTalent: Talent;
  talents: Talent[];
  subscription: Subscription;
  selectedDomains: string[] = [];
  
  constructor(private talentService: TalentService, private domainService: DomainService) { 
    
    this.subscription = domainService.domainUpdated$.subscribe( (domains) => {
      this.selectedDomains = domains;
      this.selectedTalent = null;
      this.getDomainsTalents();
    });
  
  }

  ngOnInit() {
    this.initSelectedDomains();
    this.getDomainsTalents();
  }
 
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelect(talent: Talent): void {
    this.selectedTalent = this.selectedTalent === talent ? null : talent;
  }

  getTalents(): void {
    this.talents = this.talentService.getTalents();
  }

  getDomainsTalents(): void {
    this.talents = this.selectedDomains.reduce( (array, domain) => array.concat(this.talentService.getDomainTalents(domain)), []); 
  }

  initSelectedDomains(): void {
    this.selectedDomains = this.talentService.getDomains();
  }
  
}
