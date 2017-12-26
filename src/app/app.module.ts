import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TalentsComponent } from './talents/talents.component';
import { TalentDetailComponent } from './talent-detail/talent-detail.component';
import { TalentService } from './talent.service';
import { DomainService } from './domain.service';
import { DomainsComponent } from './domains/domains.component';
import { TalentComponent } from './talent/talent.component';

@NgModule({
  declarations: [
    AppComponent,
    TalentsComponent,
    TalentDetailComponent,
    DomainsComponent,
    TalentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TalentService, DomainService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
