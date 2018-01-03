import { Component, OnInit } from '@angular/core';
import { Talent } from '../talent';
import { Subscription } from 'rxjs/Subscription';
import { TalentService } from '../talent.service';
@Component({
  selector: 'app-talents-order',
  templateUrl: './talents-order.component.html',
  styleUrls: ['./talents-order.component.css']
})
export class TalentsOrderComponent implements OnInit {
  talents: Talent[];
  talentsSubscription: Subscription;
  
  constructor( private talentService: TalentService ) { 
    this.talentsSubscription = talentService.talentsUpdated$.subscribe( (selectedTalents) => {
      this.talents = selectedTalents;
    });
  }

 

  ngOnInit() {
  }

   
  ngOnDestroy() {
    this.talentsSubscription.unsubscribe();
  }

}
