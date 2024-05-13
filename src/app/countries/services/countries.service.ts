import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';

import { Country } from './../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';


  constructor( private http : HttpClient) { }

  searchCapital(capital: string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.getCountriesResquest(url);
  }


  searchCountry(country: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${country}`;
    return this.getCountriesResquest(url);
  }


  searchRegion(region: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesResquest(url);
  }

  searchCountryById(id: string): Observable<Country | null>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0]: null),
        catchError(() => of(null))
      );
  }

  getCountriesResquest(url: string): Observable<Country[]>{
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([])),
      delay(2000)
    );
  }
}
