import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRountingModule } from './countries-routing.module';

import { ByCapitalPageComponent } from './components/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './components/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './components/by-region-page/by-region-page.component';
import { CountryPageComponent } from './components/country-page/country-page.component';
import { SearchBoxComponent } from '../shared/components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';

@NgModule({
    declarations: [
        ByCapitalPageComponent,
        ByCountryPageComponent,
        ByRegionPageComponent,
        CountryPageComponent,
        CountryTableComponent,
    ],
    exports: [],
    imports: [CommonModule, CountriesRountingModule, SharedModule]
})
export class CountriesModule {}
