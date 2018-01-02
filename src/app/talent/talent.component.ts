import { Component, OnInit, Input, Inject } from '@angular/core';
import { Talent }         from '../talent';
import { TalentService }  from '../talent.service';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class TalentComponent implements OnInit {
  @Input() talent: Talent;
  

  constructor( 
    private talentService: TalentService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  getTalent(): Talent {
    return this.talentService.getTalent(this.talent);
  }
}
