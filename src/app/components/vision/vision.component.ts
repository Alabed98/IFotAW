import { Component, ViewChild } from '@angular/core';
import { GoalsComponent } from "../goals/goals.component";
import { CommonModule } from '@angular/common'
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-vision',
  imports: [GoalsComponent, CommonModule, CdkPortal],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css'
})
export class VisionComponent {

  constructor(private overlayService:Overlay){}

  @ViewChild(CdkPortal) portal!:CdkPortal;
  isOverlay=false;



  overlay(){
    const config = new OverlayConfig({
      positionStrategy:this.overlayService.position().global().centerHorizontally().centerVertically(),
      hasBackdrop:true,
      scrollStrategy:this.overlayService.scrollStrategies.block(), 
    });
    const overlay = this.overlayService.create(config)
    overlay.attach(this.portal)
    overlay.backdropClick().subscribe(() => overlay.detach())
  }


}
