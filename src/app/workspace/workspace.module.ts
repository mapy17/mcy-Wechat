import { NgModule } from '@angular/core';
import { MySharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { LeftNavComponent } from './left-nav/left-nav.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { WorkspaceComponent } from './workspace.component';

import { EventBusService } from '../common/services/event-bus.service';
import { workspaceRoutes } from './workspace.routes';

@NgModule({
    imports: [
        MySharedModule,
        RouterModule.forChild(workspaceRoutes)
    ],
    exports: [],
    declarations: [
        WorkspaceComponent,
        LeftNavComponent,
        TopMenuComponent,
        FooterInfoComponent
    ],
    providers: [EventBusService]
})
export class WorkspaceModule { }
