// @flow

import mapboxgl from 'mapbox-gl'

import '../../dist/css/map.css'

mapboxgl.accessToken = 'your token'
function createMap (id :string, zoom: number = 12) {
  const map = new mapboxgl.Map({
    container: id,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [139.80, 35.7],
    zoom: zoom
  })
  map.addControl(new mapboxgl.ScaleControl({
    maxWidth: 200,
    unit: 'metric'
  }), 'bottom-left')
}

createMap('map', 12)
