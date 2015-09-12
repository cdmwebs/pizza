import EmberLeafletComponent from 'ember-leaflet/components/leaflet-map';
import MarkerCollectionLayer from 'ember-leaflet/layers/marker-collection';
import TileLayer from 'ember-leaflet/layers/tile';

export default EmberLeafletComponent.extend({
  childLayers: [
    TileLayer.extend({
      //tileUrl: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}',
      tileUrl: 'http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg',
      options: {
        foo: 'bar'
      },
    }),

    MarkerCollectionLayer.extend({
      contentBinding: 'controller'
    })
  ]
});
