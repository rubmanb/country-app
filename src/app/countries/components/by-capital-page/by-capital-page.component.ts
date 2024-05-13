import { Component, OnInit } from '@angular/core';
import { CountriesService } from './../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading = false;
  public initialValue: string = '';

  constructor(private countryServices: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countryServices.cacheStore.byCapital.countries;
    this.initialValue = this.countryServices.cacheStore.byCapital.term;
  }

  searchByCapital(arg: string):void{
    this.isLoading = true;
    const country = this.countryServices.searchCapital(arg).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
