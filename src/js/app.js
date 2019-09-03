
import mapboxgl from 'mapbox-gl'

import '../../dist/css/map.css'

mapboxgl.accessToken = 'your token'
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [139.80, 35.7],
  zoom: 12
})
