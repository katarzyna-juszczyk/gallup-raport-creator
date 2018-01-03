import { Component, OnInit, OnDestroy } from '@angular/core';
import { Talent } from '../talent';
import { Subscription } from 'rxjs/Subscription';
import { TalentService } from '../talent.service';
let html2pdf: any;

@Component({
  selector: 'app-create-pdf',
  templateUrl: './create-pdf.component.html',
  styleUrls: ['./create-pdf.component.css']
})
export class CreatePdfComponent implements OnInit {
  talents: Talent[];
  talentsSubscription: Subscription;

  constructor( private talentService: TalentService ) {
    this.talentsSubscription = talentService.talentsUpdated$.subscribe( (talents) => {
      this.talents = talents;
    });
  }

  ngOnInit() {
  }

  createPdf() {
    const elementToPrint = document.getElementById('printMe');
    html2pdf(elementToPrint);

  }

  ngOnDestroy() {
    this.talentsSubscription.unsubscribe();
  }
}