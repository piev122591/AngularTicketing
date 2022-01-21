import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import * as fromComponents from './components';
import * as fromDirectives from './directives';
import * as fromModals from './modals';
import * as fromPipes from './pipes';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { ErrorInfoComponent } from './modals/error-info/error-info.component';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromModals.modals,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
    ErrorInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule,
  ],
  exports: [
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    FormsModule,
    TooltipModule,
    NgSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromModals.modals,
    ...fromPipes.pipes,
  ],
  entryComponents: [...fromModals.modals],
})
export class SharedModule {}
