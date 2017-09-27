import { flyIn } from './../../animations/fly-in';
import { OnInit, NgModule, Component } from '@angular/core';
import { TreeModule, TreeNode, SharedModule, ConfirmationService, ConfirmDialogModule } from 'primeng/primeng';
import { Message } from 'primeng/components/common/api';

@Component({
    selector: 'sys-wxmenu',
    templateUrl: './sys-wxmenu.component.html',
    styleUrls: ['../sys.component.scss'],
    animations: [
        flyIn
    ],
    providers: [ConfirmationService]
})

export class SysWxmenuComponent implements OnInit {
    msgs: Message[] = [];
    selectedMenu: TreeNode;
    WxMenus: TreeNode[];
    dialogTitle: string;
    dialogDisplay: boolean;

    constructor(private confirmationService: ConfirmationService) {
        this.dialogDisplay = false;
    }
    ngOnInit() {

    }

    private Newmenu(): void {

        this.dialogDisplay = true;
        this.dialogTitle = '增加菜单';

    }

    private Editmenu(): void {
        if (!this.checkSelected()) { return };

        this.dialogDisplay = true;
        this.dialogTitle = '编辑菜单';
    }
    private TollgeState(): void {
        if (!this.checkSelected()) { return };
    }
    private Delete(): void {
        if (this.checkSelected()) {
            this.confirmationService.confirm({
                message: '确定要删除吗?',
                header: '信息提示',
                icon: 'fa fa-question-circle',
                accept: () => {
                    console.log('yes');
                },
                reject: () => {
                    console.log('no');
                }
            });
        }

    }

    private nodeSelect(event) {

    }

    private nodeUnselect(event) {

    }

    private commitToWx() {

    }

    private checkSelected(): boolean {
        if (this.selectedMenu == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '错误信息', detail: '没有选择项，请选择一项！' });
            return false;
        }
        return true;
    }
}
