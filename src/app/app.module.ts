import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatStepperModule} from '@angular/material';

import { AppComponent } from './app.component';

import { TalentsComponent } from './talents/talents.component';
import { TalentComponent } from './talent/talent.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DomainsComponent } from './domains/domains.component';

import { DomainService } from './domain.service';
import { FilterService } from './filter.service';
import { TalentService } from './talent.service';

@NgModule({
  declarations: [
    AppComponent,
    TalentsComponent,
    TalentComponent,
    DomainsComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    TagInputModule, 
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule
  ],
  providers: [ TalentService, DomainService, FilterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
