import EmberLeafletComponent from 'ember-leaflet/components/leaflet-map';
import MarkerLayer from 'ember-leaflet/layers/marker';
import TileLayer from 'ember-leaflet/layers/tile';
import MarkerCollectionLayer from 'ember-leaflet/layers/marker-collection';
import CollectionBoundsMixin from 'ember-leaflet/mixins/collection-bounds';
import PopupMixin from 'ember-leaflet/mixins/popup';

var markerLayer = MarkerLayer.extend(PopupMixin, {
  popupContentBinding: 'content.venue.name'
});

var markersLayer = MarkerCollectionLayer.extend(CollectionBoundsMixin, {
  itemLayerClass: markerLayer,
  contentBinding: 'controller.locations',
  addChildLayer: function(layer) {
    this._super(layer);
    var bounds = this.get('bounds');
    var parentLayer = this.get('parentLayer.layer');
    parentLayer.fitBounds(bounds, { maxZoom: 12 });
  },
});

var tileLayer = TileLayer.extend({
  tileUrl: 'https://api.mapbox.com/v4/{style}/{z}/{x}/{y}.png?access_token={token}',
  options: {
    style: 'mapbox.streets',
    token: 'pk.eyJ1IjoiY2Rtd2VicyIsImEiOiJjaWVnaHdsNXowMDN2czZtM3g2Nm9zMHJkIn0.ZyY3UxiPh5eepFIKeYY-Xg'
  }
});

export default EmberLeafletComponent.extend({
  zoom: 14,
  detectRetina: true,
  childLayers: [
    tileLayer,
    markersLayer
  ]
});
