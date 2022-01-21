import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { ResponseBody } from 'src/app/shared/models/response-body.model';
import { Account } from 'src/app/shared/models/account.model';
import { Observable } from 'rxjs';
import { Company } from 'src/app/shared/models/company.model';
import { Vendor } from 'src/app/shared/models/vendor.model';

@Injectable({
  providedIn: 'root',
})
export class VendorDataService {
  constructor(private restangular: Restangular) {}

  getAllVendors(
    currentPage: number = 1,
    maxItemsPageSize: number = 10,
    query: string = '',
    searchTerm: string = '',
    orderColumns: string = ''
  ): Observable<ResponseBody<Vendor[]>> {
    return this.restangular.one('/Vendor/GetVendors').get({
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
