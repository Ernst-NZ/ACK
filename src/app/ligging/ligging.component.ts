import { Component, OnInit } from '@angular/core';
declare let L;
declare var ol: any;

@Component({
  selector: 'app-ligging',
  templateUrl: './ligging.component.html',
  styleUrls: ['./ligging.component.scss']
  
})
export class LiggingComponent implements OnInit {
  latitude: number = 18.5204;
  longitude: number = 73.8567;
  map: any;
  marker: any;

  constructor() {
    
   }
  

  ngOnInit() {
    // const map = L.map('map').setView([51.505, -0.09], 13);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);


    // this.map = new ol.Map({
    //   target: 'map',
    //   layers: [
    //     new ol.layer.Tile({
    //       source: new ol.source.OSM()
    //     })
    //   ],
    //   view: new ol.View({
    //     center: ol.proj.fromLonLat([176.1347, -37.7409]),
    //     zoom: 16
    //   })
    // });



    // var iconFeature1 = new ol.Feature({
    //   geometry: new ol.geom.Point(ol.proj.fromLonLat([176.134750, -37.740940])),
    //   zoom:1,
    //   name: 'Somewhere',
    // });

    var iconFeature2 = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([176.134750, -37.740940])),
      zoom:16,
      name: 'Somewhere else'
    });

    // specific style for that one point
    iconFeature2.setStyle(new ol.style.Style({
      image: new ol.style.Icon({        
        anchor: [0.1, 0.1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Map_marker_font_awesome.svg/200px-Map_marker_font_awesome.svg.png',
      })
    }));




    const iconLayerSource = new ol.source.Vector({
      features: [iconFeature2]
    });

    const iconLayer = new ol.layer.Vector({
      source: iconLayerSource,
      // style for all elements on a layer
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: 'https://openlayers.org/en/v4.6.4/examples/data/icon.png'
        })
      })
    });


    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
        iconLayer
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([176.134750, -37.740940]),
        zoom: 20
      })
    });
  }

}
