import { SysWxmenuComponent } from './sys-wxmenu/sys-wxmenu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { sysRoutes } from './sys.routes';
import { SysComponent } from './sys.component';
import { SysMonitorComponent } from './sys-monitor/sys-monitor.component';
import { EChartOptionDirective1 } from './sys-monitor/echart-option.directive';
import { TreeTableModule, SharedModule, ConfirmDialogModule, DialogModule, GrowlModule } from 'primeng/primeng';

@NgModule({
  imports: [
    ConfirmDialogModule,
    CommonModule,
    MySharedModule,
    TreeTableModule,
    SharedModule,
    DialogModule,
    GrowlModule,
    RouterModule.forChild(sysRoutes)
  ],
  declarations: [
    EChartOptionDirective1,
    SysComponent,
    SysMonitorComponent,
    SysWxmenuComponent
  ]
})
export class SysModule { }
