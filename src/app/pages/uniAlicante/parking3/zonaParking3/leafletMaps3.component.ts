import { Component, ElementRef } from '@angular/core';

import 'leaflet-map';

@Component({
  selector: 'zona-parking3',
  templateUrl: './zonaParking3.html',
  styleUrls: ['./zonaParking3.scss'],
})
export class ZonaParking3 {

  constructor(private _elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    const el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

    L.Icon.Default.imagePath = '../../../../assets/img/theme/vendor/leaflet';
    const map = L.map(el).setView([38.381645, -0.509941], 18);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    }).addTo(map);

    let polygon = L.polygon([
      [38.381977, -0.511098],
      [38.380774, -0.510622],
      [38.381306, -0.508486],
      [38.382475, -0.508951],

     
    ]).addTo(map);

    let universidad = L.marker([38.381645, -0.509941]).addTo(map)
      .bindPopup('Parking Politecnica 4')
      .openPopup();   
  }
}
