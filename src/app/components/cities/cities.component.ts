import { Component, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayConfig } from "@angular/cdk/overlay";
import { Overlay } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import { CityComponent } from "../city/city.component";

@Component({
  selector: 'app-cities',
  imports: [ CommonModule, CdkPortal, CityComponent],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {

  isInfoVisible:boolean = false;
  infoMassage:string |null = "";
  infoBoxStyle:any = {};

  @ViewChild(CdkPortal) portal!:CdkPortal;
  @Input() city!:string | null;

  constructor (private overlay:Overlay){}

  mouseenter($event:Event){
    let path = $event.target as SVGPathElement
    this.infoMassage = path.getAttribute('name');
    const rect = path.getBoundingClientRect();
    this.isInfoVisible = true;
    this.infoBoxStyle = {
      'left.px': (rect.left + window.scrollX) + 20,
      'top.px' : (rect.top + window.scrollY) + 20,
      // 'z-index' : 10
    }
  }

  mouseleave(){
    this.isInfoVisible = false;
  }

  selectedCity($event:Event){
    let event = $event.target as SVGPathElement;
    this.city  = event.getAttribute('id')

    const config = new OverlayConfig({
      positionStrategy:this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop:true,
      scrollStrategy:this.overlay.scrollStrategies.block(), 
    })
    
    const overlayRef = this.overlay.create(config);
    overlayRef.attach(this.portal);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach())
    overlayRef.updateScrollStrategy
    
  }
  
}
