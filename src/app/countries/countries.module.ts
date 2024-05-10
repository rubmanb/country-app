import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './components/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './components/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './components/by-region-page/by-region-page.component';
import { CountryPageComponent } from './components/country-page/country-page.component';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent
  ],
  imports: [ CommonModule ],
  exports: [
  ],
})
export class CountriesModule {}
