import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';
import { ResponseBody } from 'src/app/shared/models/response-body.model';
import { SavingDiscovered } from 'src/app/shared/models/saving-discovered.model';

@Injectable({
  providedIn: 'root',
})
export class SavingDiscoveredDataService {
  constructor(private restangular: Restangular) {}

  getAllSavingsDiscovered(
    currentPage: number = 1,
    maxItemsPageSize: number = 10,
    query: string = '',
    searchTerm: string = '',
    orderColumns: string = ''
  ): Observable<ResponseBody<SavingDiscovered[]>> {
    return this.restangular.one('/SavingsDiscovered/GetSavingsDiscovered').get({
      currentPage,
      maxItemsPageSize,
      query,
      searchTerm,
      orderColumns,
    });
  }

  getSavingsDiscovered(
    savingDiscoveredId: number
  ): Observable<ResponseBody<SavingDiscovered>> {
    return this.restangular
      .one('/SavingsDiscovered/GetSavingDiscovered', savingDiscoveredId)
      .get();
  }

  addSavingsDiscovered(savingsDiscovered: SavingDiscovered): Observable<any> {
    return this.restangular.all('SavingsDiscovered/AddSavingsDiscovered').post({
      savingsDiscovered,
    });
  }

  updateSavingsDiscovered(
    savingsDiscovered: SavingDiscovered
  ): Observable<any> {
    return this.restangular
      .one('SavingsDiscovered/UpdateSavingsDiscovered')
      .customPUT({
        savingsDiscovered,
      });
  }
}
