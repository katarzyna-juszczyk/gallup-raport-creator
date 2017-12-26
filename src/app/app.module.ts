import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TalentsComponent } from './talents/talents.component';
import { TalentDetailComponent } from './talent-detail/talent-detail.component';
import { TalentService } from './talent.service';

@NgModule({
  declarations: [
    AppComponent,
    TalentsComponent,
    TalentDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TalentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
