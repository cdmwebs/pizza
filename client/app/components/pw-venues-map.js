import EmberLeafletComponent from 'ember-leaflet/components/leaflet-map';
import MarkerLayer from 'ember-leaflet/layers/marker';
import MarkerCollectionLayer from 'ember-leaflet/layers/marker-collection';
import CollectionBoundsMixin from 'ember-leaflet/mixins/collection-bounds';
import PopupMixin from 'ember-leaflet/mixins/popup';
import TileLayer from 'ember-leaflet/layers/tile';

export default EmberLeafletComponent.extend({
  zoom: 14,
  center: L.latLng(39.1000, -84.5167),
  detectRetina: true,
  childLayers: [
    TileLayer.extend({
      tileUrl: 'https://api.mapbox.com/v4/{style}/{z}/{x}/{y}{format}?access_token={token}',
      options: {
        format: '@2x.png',
        style: 'mapbox.streets',
        token: 'pk.eyJ1IjoiY2Rtd2VicyIsImEiOiJjaWVnaHdsNXowMDN2czZtM3g2Nm9zMHJkIn0.ZyY3UxiPh5eepFIKeYY-Xg'
      }
    }),

    MarkerCollectionLayer.extend(CollectionBoundsMixin, {
      contentBinding: 'controller.venues',
      itemLayerClass: MarkerLayer.extend(PopupMixin, {
        popupContentBinding: 'content.name'
      }),
      didCreateLayer: function() {
        this._super();
        if (this.get('controller.venues.length') > 0) {
          this.get('parentLayer').get('layer').fitBounds(this.get('bounds'));
        }
      }
    })
  ]
});
