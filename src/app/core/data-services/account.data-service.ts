import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { ResponseBody } from 'src/app/shared/models/response-body.model';
import { Account } from 'src/app/shared/models/account.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountDataService {
  constructor(private restangular: Restangular) {}

  getAllAccounts(
    currentPage: number = 1,
    maxItemsPageSize: number = 10,
    query: string = '',
    searchTerm: string = '',
    orderColumns: string = ''
  ): Observable<ResponseBody<Account[]>> {
    return this.restangular.one('/Accounts/GetAccounts').get({
      currentPage,
      maxItemsPageSize,
      query,
      searchTerm,
      orderColumns,
    });
  }

  getEntityDefinitions(): Observable<ResponseBody<any[]>> {
    return this.restangular.one('/Accounts/EntityDefinitions').get();
  }
}
