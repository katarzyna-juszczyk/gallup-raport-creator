import { Component, OnInit, Input } from '@angular/core';
import { TalentFeature} from '../talent-feature';
import { Talent } from '../talent';
import { TALENTS } from '../talents.data';
import { TalentService } from '../talent.service';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {
  @Input() selectedDomain: string;
  
  selectedTalent: Talent;
 
  talents: Talent[];

  constructor(private talentService: TalentService) { }

  ngOnInit() {
    console.log(this.selectedDomain);
    if (this.selectedDomain) {
      this.getDomainTalents()
    } else {
      this.getTalents();
    } 
  }
 
  onSelect(talent: Talent): void {
    this.selectedTalent = talent;
  }

  getTalents(): void {
    this.talents = this.talentService.getTalents();
  }

  getDomainTalents(): void {
    this.talents = this.talentService.getDomainTalents(this.selectedDomain);
  }

}
