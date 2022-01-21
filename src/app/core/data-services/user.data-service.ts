import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { ResponseBody } from 'src/app/shared/models/response-body.model';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private restangular: Restangular) {}

  getAllUsers(
    currentPage: number = 1,
    maxItemsPageSize: number = 10,
    query: string = '',
    searchTerm: string = '',
    orderColumns: string = ''
  ): Observable<ResponseBody<User[]>> {
    return this.restangular.one('/Users/GetUsers').get({
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
