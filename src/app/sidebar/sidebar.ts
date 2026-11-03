import { Component, Input, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit, OnDestroy {
  @Input() moduleName: string = '';

  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  // adminlte.js initialises on DOMContentLoaded, before Angular renders the sidebar,
  // so its mobile initial state and overlay are missing; handle them here.
  private isMobile = () => window.innerWidth <= 991.98;

  private close = () => {
    document.body.classList.remove('sidebar-open');
    document.body.classList.add('sidebar-collapse');
  };

  private onDocClick = (e: Event) => {
    const t = e.target as Element;
    if (document.body.classList.contains('sidebar-open') && !t.closest('.app-sidebar, [data-lte-toggle="sidebar"]')) {
      this.close();
    }
  };

  ngOnInit(): void {
    if (this.isMobile()) this.close();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        if (this.isMobile()) this.close();
      });

    // tap outside the open sidebar (and not on the toggle) closes it
    document.addEventListener('click', this.onDocClick);
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.onDocClick);
  }
}