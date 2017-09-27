import { EventBusService } from './../../common/services/event-bus.service';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  private toggleBtnStatus: Boolean = false;
  public showTopMenu: Boolean = false;

  constructor(private elementRef: ElementRef, private eventBusService: EventBusService) { }

  ngOnInit() {
  }

  public onTogglerClick(event): void {
    this.toggleBtnStatus = !this.toggleBtnStatus;
    this.eventBusService.topToggleBtn.next(this.toggleBtnStatus);
  }
}
