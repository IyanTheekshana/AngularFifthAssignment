import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToactiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter);
  }

  incrementInactiveToAactive() {
    this.inactiveToactiveCounter++;
    console.log(this.inactiveToactiveCounter);
  }
}
