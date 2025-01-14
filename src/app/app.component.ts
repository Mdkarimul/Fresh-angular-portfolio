import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
import { slideInAnimation } from './pages/home/animation';
import { fromEvent } from 'rxjs';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgxTypedWriterModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';

  constructor(
    private elementRef: ElementRef,
    private loadingService: LoadingService
  ) {}
  @ViewChild('scrollableElement')
  main!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.main.nativeElement.addEventListener('scroll', (element) => {
      const pos = this.main?.nativeElement.scrollTop;
      this.loadingService.subject.next(pos);
    });
  }
}
