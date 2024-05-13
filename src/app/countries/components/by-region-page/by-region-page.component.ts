import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa'|'America'|'Asia'|'Europe'|'Oceania'
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa','America','Asia','Europe','Oceania'];
  public selectedRegions?: Region;

  constructor(private countriesService: CountriesService){}

  searchByRegion(region: Region) {
    this.selectedRegions = region;
    this.countriesService.searchRegion(region).subscribe(country => {
      this.countries = country;
    });
  }

}
