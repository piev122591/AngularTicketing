import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BannerUIService } from 'src/app/core/services/banner-ui.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { SavingDiscoveredDataService } from 'src/app/core/data-services/saving-discovered.data-service';
import { SavingDiscovered } from 'src/app/shared/models/saving-discovered.model';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs/operators';
import { filter } from '@amcharts/amcharts4/.internal/core/utils/Iterator';

@Component({
  selector: 'mts-savings-discovered',
  templateUrl: './savings-discovered.component.html',
  styleUrls: ['./savings-discovered.component.scss'],
})
export class SavingsDiscoveredComponent implements OnInit {
  isTableCollapsed: boolean = false;
  isAdd: boolean = false;

  itemsPerPage: number = 10;
  currentPage: number = 1;

  pages: number[] = [];

  maxItemsFound: number;

  searchForm: FormGroup;
  filterForm: FormGroup;
  math: any = Math;

  outOfRangePagination: boolean;

  savingsDiscovered: SavingDiscovered[] = [];

  sortQuery$: BehaviorSubject<string> = new BehaviorSubject('');
  filterQuery$: BehaviorSubject<string> = new BehaviorSubject('');

  sortColumns: any = [
    {
      column: 'number',
      displayName: 'Number',
      sortQuery: 'Number',
      sort: null,
    },
    {
      column: 'parentId',
      displayName: 'Parent',
      sortQuery: 'ParentId',
      sort: null,
    },
    {
      column: 'company',
      displayName: 'Company',
      sortQuery: 'Company.Name',
      sort: null,
    },
    {
      column: 'account',
      displayName: 'Account',
      sortQuery: 'Account.Name',
      sort: null,
    },
    {
      column: 'accountType',
      displayName: 'Account Type',
      sortQuery: 'Account.AccountType',
      sort: null,
    },
    {
      column: 'billMonth',
      displayName: 'Bill Month',
      sortQuery: 'BillMonth',
      sort: null,
    },
    {
      column: 'assignedTo',
      displayName: 'Assigned To',
      sortQuery: 'AssignedTo',
      sort: null,
    },
    {
      column: 'totalAmount',
      displayName: 'Total Amount',
      sortQuery: 'TotalAmount',
      sort: null,
    },
    {
      column: 'status',
      displayName: 'State(Status)',
      sortQuery: 'Status',
      sort: null,
    },
    {
      column: 'savingsType',
      displayName: 'Savings Type',
      sortQuery: 'SavingsType',
      sort: null,
    },
  ];

  isSearching: boolean;

  constructor(
    private toastrService: ToastrService,
    private bannerUIService: BannerUIService,
    private modalService: BsModalService,
    private savingsDiscoveredDataService: SavingDiscoveredDataService,
    private formBuilder: FormBuilder
  ) {}

  get query(): AbstractControl {
    return this.searchForm.get('query');
  }

  sort(column: any) {
    this.sortColumns = this.sortColumns.map((sortColumn: any) => {
      if (sortColumn.column !== column.column) {
        sortColumn.sort = null;
      }

      return sortColumn;
    });
    column.sort = column.sort
      ? column.sort === 'asc'
        ? 'desc'
        : 'asc'
      : 'asc';

    this.sortQuery$.next(column.sortQuery + ' ' + column.sort);
  }

  ngOnInit(): void {
    this.bannerUIService.breadcrumbs$.next([
      { name: 'Home', path: ['/admin'] },
      { name: 'Savings Discovered' },
    ]);
    this.initForm();
  }

  setOutOfRangePagination(outOfRange: boolean) {
    this.outOfRangePagination = outOfRange;
  }

  movePage(page: number) {
    this.currentPage = page;
    this.query.patchValue(this.query.value);
  }

  changeItemsPerPage() {
    this.currentPage = 1;
    this.query.patchValue(this.query.value);
  }

  next() {
    this.movePage(++this.currentPage);
  }

  prev() {
    this.movePage(--this.currentPage);
  }

  search() {
    this.filterQuery$.next(this.buildFilterStringQuery(this.filterForm.value));
    this.isSearching = true;
  }

  reset() {
    this.filterForm.reset();
    this.filterQuery$.next('');
  }

  private initForm() {
    this.searchForm = this.formBuilder.group({
      query: [''],
    });

    this.filterForm = this.formBuilder.group({
      number: [null],
      company: [null],
      account: [null],
      accountType: [null],
      assignedTo: [null],
      status: [''],
      savingsType: [''],
    });

    combineLatest(
      this.query.valueChanges.pipe(debounceTime(300), startWith('')),
      this.filterQuery$.asObservable(),
      this.sortQuery$.asObservable()
    ).subscribe(([query, filterQuery, sortQuery]) => {
      this.savingsDiscoveredDataService
        .getAllSavingsDiscovered(
          this.currentPage,
          this.itemsPerPage,
          filterQuery,
          query,
          sortQuery
        )
        .subscribe((res) => {
          this.isSearching = false;
          this.savingsDiscovered = res.data;

          this.maxItemsFound = res.maxItems;
          this.pages = Array(res.maxPages)
            .fill(1)
            .map((n, i) => i + 1);
        });
    });
  }

  private buildFilterStringQuery(filterObj: any): string {
    let filterQuery: any[] = [];

    if (filterObj.number) {
      filterQuery.push(`Number.contains("${filterObj.number}")`);
    }

    if (filterObj.company) {
      filterQuery.push(`Company.Name.contains("${filterObj.company}")`);
    }

    if (filterObj.account) {
      filterQuery.push(`Account.Name.contains("${filterObj.account}")`);
    }

    if (filterObj.assignedTo) {
      filterQuery.push(`AssignedTo.Name.contains("${filterObj.assignedTo}")`);
    }

    if (filterObj.status !== '') {
      filterQuery.push(`Status == ${filterObj.status}`);
    }

    if (filterObj.savingsType !== '') {
      filterQuery.push(`SavingsType == ${filterObj.savingsType}`);
    }

    return filterQuery.length ? filterQuery.join(' and ') : '';
  }
}
