import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { FilterTextboxComponent } from './filter-textbox.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MapPointComponent } from './map/mapPoint.component';
import { RouterModule } from '@angular/router';

@NgModule({
 imports: [ CommonModule,FormsModule, RouterModule ],
 declarations: [ FilterTextboxComponent, CapitalizePipe, TrimPipe, PaginationComponent, MapComponent, MapPointComponent],
 exports: [ FilterTextboxComponent, RouterModule, CapitalizePipe, TrimPipe, PaginationComponent, MapComponent, MapPointComponent, FormsModule ]
})
export class SharedModule { }