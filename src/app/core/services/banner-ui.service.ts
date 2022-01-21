import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerUIService {
  breadcrumbs$: BehaviorSubject<any[]> = new BehaviorSubject(['Admin']);
}
