
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';

import { DashboadComponent } from './dashboad/dashboad.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { IncrementatorComponent } from '../components/incrementator/incrementator.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({

  declarations: [
    PagesComponent,
    HeaderComponent,
    DashboadComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementatorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent
  ],
  exports: [
    PagesComponent,
    HeaderComponent,
    DashboadComponent,
    ProgressComponent,
    IncrementatorComponent,
    Graficas1Component,
    GraficoDonaComponent,
    AccountSettingsComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ChartsModule,
    PagesRoutingModule

  ]

})

export class PagesModule { }
