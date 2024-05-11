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
  constructor(private countryServices: CountriesService){}

  searchByCapital(arg: string):void{
    const country = this.countryServices.searchCapital(arg).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
