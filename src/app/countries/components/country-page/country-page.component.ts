import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { CountriesService } from './../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countries.interface';
@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent{

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ){}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryById(id)),
    )
    .subscribe(
      country => {
        if(!country) return this.router.navigateByUrl('');
        return this.country = country;
        // return;
      }
    );
  }


}
