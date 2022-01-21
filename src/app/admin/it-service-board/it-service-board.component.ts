import { Component, OnInit } from '@angular/core';
import { BannerUIService } from 'src/app/core/services/banner-ui.service';

@Component({
  selector: 'mts-it-service-board',
  templateUrl: './it-service-board.component.html',
  styleUrls: ['./it-service-board.component.scss'],
})
export class ItServiceBoardComponent implements OnInit {
  isTableCollapsed: boolean = false;
  pages: any[] = [0];
  currentPage = 0;

  math: any = Math;

  outOfRangePagination: boolean;

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
      column: 'status',
      displayName: 'State(Status)',
      sortQuery: 'Status',
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
      displayName: 'Caller',
      sortQuery: 'Account.Name',
      sort: null,
    },
    {
      column: 'accountType',
      displayName: 'Created',
      sortQuery: 'Account.AccountType',
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
      displayName: 'Category',
      sortQuery: 'TotalAmount',
      sort: null,
    },

    {
      column: 'savingsType',
      displayName: 'Ticket Type',
      sortQuery: 'SavingsType',
      sort: null,
    },

    {
      column: 'savingsType',
      displayName: 'Incident Type',
      sortQuery: 'SavingsType',
      sort: null,
    },
  ];

  isSearching: boolean;
  constructor(private bannerUIService: BannerUIService) {}

  ngOnInit(): void {
    this.bannerUIService.breadcrumbs$.next([
      { name: 'Home', path: ['/admin'] },
      { name: 'IT Service Board' },
    ]);
  }

  sort(column: any) {
    column.sort = column.sort
      ? column.sort === 'asc'
        ? 'desc'
        : 'asc'
      : 'asc';
  }

  setOutOfRangePagination(outOfRange: boolean) {
    this.outOfRangePagination = outOfRange;
  }

  movePage(page: number) {
    this.currentPage = page;
    // this.query.patchValue(this.query.value);
  }

  changeItemsPerPage() {
    this.currentPage = 1;
    // this.query.patchValue(this.query.value);
  }

  next() {
    this.movePage(++this.currentPage);
  }

  prev() {
    this.movePage(--this.currentPage);
  }
}
