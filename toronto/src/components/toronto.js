// ///////////////////////////////////////
  // New in 0.4.0
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'
  /* eslint-disable */

  // Initialize Firebase
  /*var config = {
    apiKey: "AIzaSyA4renabMYVppysVyDm_pxhqGCTEYHAoXQ",
    authDomain: "premier-96d7f.firebaseapp.com",
    databaseURL: "https://premier-96d7f.firebaseio.com",
    projectId: "premier-96d7f",
    storageBucket: "premier-96d7f.appspot.com",
    messagingSenderId: "1008472390041"
  };

  firebase.initializeApp(config);*/

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCQBYduh5zG_frXGYd5wjO8lTGo3gV9D9o',
      v: '3'
      // libraries: 'places', //// If you need to use place input
    }
  })
  export default {
    name: 'toronto',
      data () {
      return {
        titre: 'Points of Interest',
        place: 'Place',
        website: 'Website',
        zoom: 11,
        center: {lat: 43.766771, lng: -79.337900},
        infoContent: '',
          infoWindowPos: {
            lat: 0,
            lng: 0
          },
          infoWinOpen: false,
          currentMidx: null,
          infoOptions: {
            pixelOffset: {
              width: 0,
              height: -35
            }
          },
        markers: [{
        position: {
          lat: 43.642424,
          lng: -79.385865
        },
        title: 'Ripley\'s Aquarium',
        src: require('../assets/images/aquarium.png'),
        url: 'http://www.ripleyaquariums.com/canada/'
      }, {
        position: {
          lat: 43.642566,
          lng: -79.387057
        },
        title: 'CN Tower',
        src: require('../assets/images/cntower.jpg'),
        url: 'http://www.cntower.ca/en-ca/home.html'
      }, {
        position: {
          lat: 43.817699,
          lng: -79.18589
        },
        title: 'Toronto Zoo',
        src: require('../assets/images/torontozoo.jpg'),
        url: 'http://www.torontozoo.com/'
      }, {
        position: {
          lat: 43.66771,
          lng: -79.394777
        },
        title: 'Royal Ontario Museum',
        src: require('../assets/images/rom.jpg'),
        url: 'http://www.rom.on.ca/en'
      }, {
        position: {
          lat: 43.653607,
          lng: -79.392512
        },
        title: 'Art Gallery of Ontario',
        src: require('../assets/images/artgalleryontario.jpg'),
        url: 'http://www.ago.net/'
      }, {
        position: {
          lat: 43.725887,
          lng: -79.453206
        },
        title: 'Yorkdale Mall',
        src: require('../assets/images/yorkdalemall.jpg'),
        url: 'http://yorkdale.com/'
      }, {
        position: {
          lat: 43.653597,
          lng: -79.381455
        },
        title: 'Eaton Center',
        src: require('../assets/images/torontoeatoncentre.jpg'),
        url: 'http://www.torontoeatoncentre.com/en/Pages/default.aspx'
      }, {
        position: {
          lat: 43.65344,
          lng: -79.38409
        },
        title: 'City Hall',
        src: require('../assets/images/torontocityhall.jpg'),
        url: 'http://www.toronto.ca/'
      }, {
        position: {
          lat: 43.646988,
          lng: -79.377264
        },
        title: 'Hockey Hall of Fame',
        src: require('../assets/images/hockeyhalloffame.jpg'),
        url: 'http://www.hhof.com/'
      }, {
        position: {
          lat: 43.643466,
          lng: -79.379099
        },
        title: 'Air Canada Center',
        src: require('../assets/images/aircanadacentre.jpg'),
        url: 'http://www.theaircanadacentre.com/'
      }],
        image: function (event) {
          // `this` fait référence à l'instance de Vue à l'intérieur de `methods`
          alert('Bonjour !')
          // `event` est l'évènement natif du DOM
          if (event) {
            alert(event.target.tagName)
          }
        },
        toggleInfoWindow: function (marker, idx, from) {
          this.infoWindowPos = marker.position
          this.infoContent = marker.title + '</br><img width="150" height="100" src="' + marker.src + '">'

          //check if its the same marker that was selected if yes toggle
          if (this.currentMidx === idx) {
            this.infoWinOpen = !this.infoWinOpen
          //if different marker set infowindow to open and reset current marker index
          } else {
            this.infoWinOpen = true
            this.currentMidx = idx
          }
          if (from === 0) {
            this.zoom = 13
          }
        }
      }
    }
  }
