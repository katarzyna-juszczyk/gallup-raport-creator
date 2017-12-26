import { Component, OnInit, Input } from '@angular/core';
import { Talent }         from '../talent';
import { TalentService }  from '../talent.service';
@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class TalentComponent implements OnInit {
  @Input() talent: Talent;
  

  constructor( private talentService: TalentService) { }

  ngOnInit(): void {

  }

  getTalent(): Talent {
    return this.talentService.getTalent(this.talent);
  }
}
