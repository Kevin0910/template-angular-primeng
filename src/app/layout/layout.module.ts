// Importaciones de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importaciones de primeNG
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
// Importaciones de componentes
import { LayoutComponent } from './layout.component';
import { AppRoutingModule } from '../app-routing.module';

const components = [ LayoutComponent];

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        ],
    declarations: [components],
    exports: [components],
})
export class LayoutModule {}
