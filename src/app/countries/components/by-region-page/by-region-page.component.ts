import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[] = [];
  public regions: Region[] = ['Africa','America','Asia','Europe','Oceania'];
  public selectedRegions?: Region;

  constructor(private countriesService: CountriesService){}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegions = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region) {
    this.selectedRegions = region;
    this.countriesService.searchRegion(region).subscribe(country => {
      this.countries = country;
    });
  }

}
