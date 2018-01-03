import { Component, OnInit, OnDestroy } from '@angular/core';
import { Talent } from '../talent';
import { TalentFeature} from '../talent-feature';
import { Subscription } from 'rxjs/Subscription';
import { TalentService } from '../talent.service';

@Component({
  selector: 'app-raport-configuration',
  templateUrl: './raport-configuration.component.html',
  styleUrls: ['./raport-configuration.component.css']
})
export class RaportConfigurationComponent implements OnInit {
  talents: Talent[];
  talentsSubscription: Subscription;

  constructor( private talentService: TalentService ) {
    this.talentsSubscription = talentService.talentsUpdated$.subscribe( (orderedTalents) => {
      this.talents = orderedTalents;
    });
  }

  ngOnInit() {
    this.includeAllFeatures();
  }

  includeAllFeatures() {
    this.talents.map(talent => talent.talentFeatures.map(feature => feature.included = true));
  }

  ngOnDestroy() {
    this.talentsSubscription.unsubscribe();
  }

  onUpdateIncluded(talent: Talent) {
    this.talentService.onUpdateSelectedTalents(this.talents);
  }

}
