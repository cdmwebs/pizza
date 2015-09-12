import EmberLeafletComponent from 'ember-leaflet/components/leaflet-map';
import MarkerCollectionLayer from 'ember-leaflet/layers/marker-collection';
import TileLayer from 'ember-leaflet/layers/tile';

export default EmberLeafletComponent.extend({
  zoom: 14,
  center: L.latLng(39.1000, -84.5167),
  childLayers: [
    TileLayer.extend({
      tileUrl: 'https://api.mapbox.com/v4/{style}/{z}/{x}/{y}.png?access_token={token}',
      options: {
        style: 'mapbox.streets',
        token: 'pk.eyJ1IjoiY2Rtd2VicyIsImEiOiJjaWVnaHdsNXowMDN2czZtM3g2Nm9zMHJkIn0.ZyY3UxiPh5eepFIKeYY-Xg'
      }
    }),

    MarkerCollectionLayer.extend({
      contentBinding: 'controller.venues'
    })
  ]
});
