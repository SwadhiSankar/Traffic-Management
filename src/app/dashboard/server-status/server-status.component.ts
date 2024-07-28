import {
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  effect,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  // private interval?: NodeJS.Timeout;
  // Sometime nodejs will not be found based on version
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);
  constructor() {
    effect( ()=>{
      console.log(this.currentStatus());
    })
    
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const randomValue = Math.random(); //0 to 1 it will generate
      if (randomValue < 0.5) {
        this.currentStatus.set('online');
      } else if (randomValue < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
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
