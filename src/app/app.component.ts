import { Component } from '@angular/core';
import { TalentFeature} from './talent-feature';
import { Talent } from './talent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Konfigurator Raportów Clifton Strengths';
  isWizardLinear: boolean = true;



 ngOnInit() {
  }


}
