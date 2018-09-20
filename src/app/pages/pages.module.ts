import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
// charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafics1Component } from './grafics1/grafics1.component';

// temporal
import { IncrementComponent } from '../components/increment/increment.component';
import { GraficDoughnutComponent } from '../components/grafic-doughnut/grafic-doughnut.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafics1Component,
        IncrementComponent,
        GraficDoughnutComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Grafics1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule { }
