import { Component, ElementRef } from '@angular/core';

import 'leaflet-map';

@Component({
  selector: 'zona-parking2',
  templateUrl: './zonaParking2.html',
  styleUrls: ['./zonaParking2.scss'],
})
export class ZonaParking2 {

  constructor(private _elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    const el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

    L.Icon.Default.imagePath = '../../../../assets/img/theme/vendor/leaflet';
    const map = L.map(el).setView([38.381076, -0.511009], 18);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    }).addTo(map);

    let polygon = L.polygon([
      [38.381267, -0.511079],
      [38.381220, -0.511062],
      [38.381166, -0.511083],
      [38.381148, -0.511154],
      [38.380796, -0.511015],
      [38.380844, -0.510815],
      [38.381287, -0.511003],
     
    ]).addTo(map);

    let universidad = L.marker([38.381076, -0.511009]).addTo(map)
      .bindPopup('Parking Museo UA')
      .openPopup();   
  }
}
