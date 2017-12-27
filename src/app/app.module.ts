import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TalentsComponent } from './talents/talents.component';
import { TalentService } from './talent.service';
import { TalentComponent } from './talent/talent.component';
import { DomainsComponent } from './domains/domains.component';

@NgModule({
  declarations: [
    AppComponent,
    TalentsComponent,
    TalentComponent,
    DomainsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TalentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
