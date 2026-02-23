import { ElementRef, inject, Injectable, Injector } from '@angular/core';
import { ConnectedPosition, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayComponent } from '../../components/overlay/overlay';
import { SidebarItem } from '../models/layout/sidebar-item';
import { filter, fromEvent, take } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class OverlayService {
    private overlay = inject(Overlay);
    private injector = inject(Injector);
    private overlayRef?: OverlayRef;

    open(elementRef?: ElementRef, sidebarItem?: SidebarItem) {
        this.overlayRef = this.createOverlay(elementRef);
        const overlayPortal = new ComponentPortal(OverlayComponent, null, this.injector);

        const componentRef = this.overlayRef.attach(overlayPortal);

        if (sidebarItem) {
            componentRef.instance.items = sidebarItem.children ?? [];
            componentRef.instance.item = sidebarItem;
        }

        const mainArea: HTMLElement | null = document.getElementById("mainArea");

        if (mainArea) {
            fromEvent<MouseEvent>(mainArea, 'mouseover').pipe(filter(event => {
                const clickTarget = event.target as HTMLElement;
                const isClickInsideOverlay = this.overlayRef?.overlayElement.contains(clickTarget);
                const isClickOnSidebarItem = clickTarget.closest('.sidebar-item') !== null;

                return !isClickInsideOverlay && !isClickOnSidebarItem;
            }), take(1)).subscribe(() => this.close());
        }
    }

    close() {
        this.overlayRef?.dispose();
        this.overlayRef = undefined;
    }

    private createOverlay(elementRef?: ElementRef): OverlayRef {
        const overlayConfig = this.getOverlayConfig(elementRef!);

        return this.overlay.create(overlayConfig);
    }

    private getOverlayConfig(elementRef: ElementRef): OverlayConfig {
        const positions: ConnectedPosition[] = [{
            originX: 'end',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top',
            offsetX: 8
        }];
        
        const positionStrategy = this.overlay.position()
            .flexibleConnectedTo(elementRef)
            .withPositions(positions)
            .withPush(true);

        return new OverlayConfig({
            hasBackdrop: false,
            panelClass: 'sidebar-flyout-panel',
            scrollStrategy: this.overlay.scrollStrategies.close(),
            positionStrategy
        })
    }
}