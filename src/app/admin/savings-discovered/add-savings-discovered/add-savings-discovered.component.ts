import { Component, OnInit, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BannerUIService } from 'src/app/core/services/banner-ui.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AddAttachmentComponent } from 'src/app/shared/modals';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { SavingDiscoveredDataService } from 'src/app/core/data-services/saving-discovered.data-service';
import { Company } from 'src/app/shared/models/company.model';
import { CompanyDataService } from 'src/app/core/data-services/company.data-service';
import { User } from 'src/app/shared/models/user.model';
import { Account } from 'src/app/shared/models/account.model';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { AccountDataService } from 'src/app/core/data-services/account.data-service';
import { UserDataService } from 'src/app/core/data-services/user.data-service';
import { BillingType } from 'src/app/shared/enums/billing-type.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { SavingDiscovered } from 'src/app/shared/models/saving-discovered.model';

@Component({
  selector: 'mts-add-savings-discovered',
  templateUrl: './add-savings-discovered.component.html',
  styleUrls: ['./add-savings-discovered.component.scss'],
})
export class AddSavingsDiscoveredComponent implements OnInit {
  isSaving: boolean = false;
  isEditMode: boolean = false;

  savingsDiscovered: SavingDiscovered;

  savingDiscoveredForm: FormGroup;

  companies: Company[];
  accounts: Account[];
  users: User[];
  parents: SavingDiscovered[];

  companySearchQuery$ = new EventEmitter<string>();
  accountSearchQuery$ = new EventEmitter<string>();
  userSearchQuery$ = new EventEmitter<string>();
  parentSearchQuery$ = new EventEmitter<string>();

  constructor(
    private toastrService: ToastrService,
    private bannerUIService: BannerUIService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private savingDiscoveredDataService: SavingDiscoveredDataService,
    private companyDataService: CompanyDataService,
    private accountDataService: AccountDataService,
    private userDataService: UserDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getSavingsDiscovered();

    this.bannerUIService.breadcrumbs$.next([
      { name: 'Home', path: ['/admin'] },
      { name: 'Savings Discovered', path: ['/admin/savings-discovered'] },
      {
        name: this.savingsDiscovered
          ? 'Edit Savings Discovered'
          : 'Add Savings Discovered',
      },
    ]);

    this.initForm();
  }

  fC(formControlName: string): AbstractControl {
    return this.savingDiscoveredForm.get(formControlName);
  }

  addAttachments() {
    this.modalService.show(AddAttachmentComponent, {
      ignoreBackdropClick: true,
      class: 'gcc-modal',
    });
  }

  save() {
    this.isSaving = true;
    setTimeout(() => {
      this.isSaving = false;
      (<any>Object)
        .values(this.savingDiscoveredForm.controls)
        .forEach((control: any) => {
          control.markAsDirty(); // or control.markAsTouched();
        });

      console.log(this.savingDiscoveredForm);

      if (this.savingDiscoveredForm.valid) {
        (this.savingsDiscovered
          ? this.savingDiscoveredDataService.updateSavingsDiscovered({
              id: this.savingsDiscovered.id,
              ...this.savingDiscoveredForm.value,
            })
          : this.savingDiscoveredDataService.addSavingsDiscovered(
              this.savingDiscoveredForm.value
            )
        ).subscribe((res) => {
          this.toastrService.success(
            this.savingsDiscovered
              ? 'Udpated Savings Discovered successfully!'
              : 'Added Savings Discovered successfully!'
          );

          if (!this.savingsDiscovered) {
            this.router.navigate(['/admin/savings-discovered']);
          }
        });
      } else {
      }
    }, 1000);
  }

  private initForm() {
    this.savingDiscoveredForm = this.formBuilder.group({
      number: [this.savingsDiscovered ? this.savingsDiscovered.number : null],
      company: [
        this.savingsDiscovered ? this.savingsDiscovered.company : null,
        Validators.required,
      ],
      account: [
        this.savingsDiscovered ? this.savingsDiscovered.account : null,
        Validators.required,
      ],
      accountType: [
        this.savingsDiscovered
          ? this.savingsDiscovered.account.accountType
          : null,
      ],
      vendor: [null],
      costCenter: [
        this.savingsDiscovered ? this.savingsDiscovered.costCenter : null,
      ],
      circuitNumber: [
        this.savingsDiscovered ? this.savingsDiscovered.circuitNumber : null,
      ],
      parentId: [null],
      assignedTo: [
        this.savingsDiscovered ? this.savingsDiscovered.assignedTo : null,
      ],
      status: [
        this.savingsDiscovered ? this.savingsDiscovered.status : null,
        Validators.required,
      ],
      savingsType: [
        this.savingsDiscovered ? this.savingsDiscovered.savingsType : null,
        Validators.required,
      ],
      billingType: [
        this.savingsDiscovered ? this.savingsDiscovered.billingType : null,
      ],
      billingCycle: [
        this.savingsDiscovered ? this.savingsDiscovered.billingCycle : null,
      ],
      amount: [this.savingsDiscovered ? this.savingsDiscovered.amount : null],
      totalAmount: [
        this.savingsDiscovered ? this.savingsDiscovered.totalAmount : null,
      ],
      percentBillable: [
        this.savingsDiscovered ? this.savingsDiscovered.percentBillable : null,
      ],
      billableROI: [
        this.savingsDiscovered ? this.savingsDiscovered.billableROI : null,
      ],
      netSavings: [
        this.savingsDiscovered ? this.savingsDiscovered.netSavings : null,
      ],
      billMonth: [
        this.savingsDiscovered ? this.savingsDiscovered.billMonth : null,
        Validators.required,
      ],
      dateDiscovered: [
        this.savingsDiscovered ? this.savingsDiscovered.dateDiscovered : null,
        Validators.required,
      ],
      dateApproved: [
        this.savingsDiscovered ? this.savingsDiscovered.dateApproved : null,
      ],
      dateSentToCarrier: [
        this.savingsDiscovered
          ? this.savingsDiscovered.dateSentToCarrier
          : null,
      ],
      estimateRealizedDate: [
        this.savingsDiscovered
          ? this.savingsDiscovered.estimateRealizedDate
          : null,
      ],
      dateRealized: [
        this.savingsDiscovered ? this.savingsDiscovered.dateRealized : null,
      ],
      dateInvoiced: [
        this.savingsDiscovered ? this.savingsDiscovered.dateInvoiced : null,
      ],
      amxInvoiceNumber: [
        this.savingsDiscovered ? this.savingsDiscovered.amxInvoiceNumber : null,
      ],
      description: [
        this.savingsDiscovered ? this.savingsDiscovered.description : null,
        Validators.maxLength(4000),
      ],
    });

    this.savingDiscoveredForm
      .get('billingType')
      .valueChanges.subscribe((billingType) => {
        switch (+billingType) {
          case BillingType.MONTHLY:
            this.savingDiscoveredForm.get('billingCycle').patchValue(12);
            break;
          case BillingType.ONE_TIME:
            this.savingDiscoveredForm.get('billingCycle').patchValue(1);
            break;
        }
      });

    this.companySearchQuery$
      .pipe(
        startWith(''),
        debounceTime(200),
        switchMap((term) =>
          this.companyDataService.getAllCompanies(1, 20, '', term)
        )
      )
      .subscribe((res) => (this.companies = res.data));

    this.accountSearchQuery$
      .pipe(
        startWith(''),
        debounceTime(200),
        switchMap((term) =>
          this.accountDataService.getAllAccounts(1, 20, '', term)
        )
      )
      .subscribe((res) => (this.accounts = res.data));

    this.userSearchQuery$
      .pipe(
        startWith(''),
        debounceTime(200),
        switchMap((term) => this.userDataService.getAllUsers(1, 20, '', term))
      )
      .subscribe((res) => (this.users = res.data));

    this.parentSearchQuery$
      .pipe(
        startWith(
          this.savingsDiscovered ? this.savingsDiscovered.parentId : null
        ),
        debounceTime(200),
        switchMap((term) =>
          this.savingDiscoveredDataService.getAllSavingsDiscovered(
            1,
            20,
            '',
            term
          )
        )
      )
      .subscribe((res) => (this.parents = res.data));
  }

  private getSavingsDiscovered() {
    this.savingsDiscovered = this.route.snapshot.data.savingsDiscovered;
  }
}
