import {
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  // private interval?: NodeJS.Timeout;
  // Sometime nodejs will not be found based on version
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);
  constructor() {}

  ngOnInit() {
    const interval = setInterval(() => {
      const randomValue = Math.random(); //0 to 1 it will generate
      if (randomValue < 0.5) {
        this.currentStatus = 'online';
      } else if (randomValue < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearTimeout(interval);
    });
  }
  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
