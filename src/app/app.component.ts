import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'mst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GCC';

  isLoading: boolean;

  constructor(
    private loadingService: LoadingService,
    private changeDetect: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getLoadingState();
  }

  private getLoadingState() {
    this.loadingService.loading$.asObservable().subscribe((loading) => {
      this.isLoading = loading;
      this.changeDetect.detectChanges();
    });
  }
}
