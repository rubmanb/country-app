import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';

import { Country } from './../interfaces/countries.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    byCapital: {term: '', countries: []},
    byCountries: {term: '', countries: []},
    byRegion: {region: '', countries: []},
  }

  constructor( private http : HttpClient){
    this.loadFromLocalStorage();
  }

  searchCapital(capital: string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.getCountriesResquest(url).pipe(
      tap( countries =>
        this.cacheStore.byCapital = {term: capital, countries: countries}),
      tap(() => this.saveToLocalStorage()),
    );
  }

  searchCountry(country: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${country}`;
    return this.getCountriesResquest(url).pipe(
      tap( countries =>
        this.cacheStore.byCountries = {term: country, countries: countries}),
      tap(() => this.saveToLocalStorage()),
    );
  }

  searchRegion(region: Region): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesResquest(url).pipe(
      tap( countries =>
        this.cacheStore.byRegion = {region: region, countries: countries}),
      tap(() => this.saveToLocalStorage()),
    );
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
      // delay(2000)
    );
  }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(){
    if(!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

}
