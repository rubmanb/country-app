import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading = false;
  constructor(private countryServices: CountriesService){}

  searchByCapital(arg: string):void{
    this.isLoading = true;
    const country = this.countryServices.searchCapital(arg).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
