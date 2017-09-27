import { AttentionUserComponent } from './attention-user/attention-user.component';
import { AttentionComponent } from './attention.component';
import { AttentionRoutes } from './attention.routes';
import { RouterModule } from '@angular/router';
import { MySharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        MySharedModule,
        RouterModule.forChild(AttentionRoutes)
    ],
    exports: [],
    declarations: [
        AttentionComponent,
        AttentionUserComponent
    ],
    providers: []
})

export class AttentionModule { }