import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy{



  private debouncer: Subject<string> = new Subject<string>;
  private debouncerSuscription?: Subscription;


  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>;

  @Output()
  public onDebounce = new EventEmitter<string>;


  ngOnInit(): void {
    this.debouncerSuscription =  this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe;
  }

  emitValue(event: string) {
    this.onValue.emit(event)
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm);
  }
}
