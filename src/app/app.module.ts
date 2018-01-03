import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatStepperModule,
         MatDialogModule,
         MatExpansionModule,
         MatCheckboxModule,
         } from '@angular/material';

import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';

import { TalentsComponent } from './talents/talents.component';
import { TalentComponent } from './talent/talent.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DomainsComponent } from './domains/domains.component';

import { DomainService } from './domain.service';
import { FilterService } from './filter.service';
import { TalentService } from './talent.service';
import { TalentsOrderComponent } from './talents-order/talents-order.component';
import { RaportConfigurationComponent } from './raport-configuration/raport-configuration.component';
import { CreatePdfComponent } from './create-pdf/create-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    TalentsComponent,
    TalentComponent,
    DomainsComponent,
    AutocompleteComponent,
    TalentsOrderComponent,
    RaportConfigurationComponent,
    CreatePdfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatDialogModule,
    MatExpansionModule,
    MatCheckboxModule,
    DndModule.forRoot()
  ],
  entryComponents: [ TalentComponent ],
  providers: [ TalentService, DomainService, FilterService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
