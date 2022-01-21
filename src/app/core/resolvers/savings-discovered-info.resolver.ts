import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SavingDiscoveredDataService } from '../data-services/saving-discovered.data-service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SavingsDiscoveredInfoResolver implements Resolve<any> {
  constructor(
    private savingsDiscoveredDataService: SavingDiscoveredDataService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.savingsDiscoveredDataService
      .getSavingsDiscovered(route.params.id)
      .pipe(map((res) => res.data));
  }
}
