<template>
  <div class="toronto">
    <div class="container">
      <div class="row">
      
        <div class="col-md-4" id="interest">
          <h3>{{titre}}</h3>
           <table class="table table-hover">
        <thead>
          <tr>
          <th>{{place}}</th>
          <th>{{website}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="marker in markers" >
          <td @click='toggleInfoWindow(marker,0,0)' class="interestList">{{ marker.title }}</td>
          <td><a :href="marker.url" target="_blank">&rarr;</a></td>
          </tr>
        </tbody>
        </table>
        </div>

        <div class="col-md-8" id="carte">
          <gmap-map
            :center="center"
            :zoom="zoom"
            style="width: 100%; height: 100%"
          >
            <gmap-info-window 
                :options="infoOptions" 
                :position="infoWindowPos" 
                :opened="infoWinOpen" 
                :content="infoContent" 
                @closeclick="infoWinOpen=false">
            </gmap-info-window>
            <gmap-marker
              :key="i" 
              v-for="(m,i) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="toggleInfoWindow(m,i,1),center=m.position">
            </gmap-marker>
        </gmap-map>
        </div>
        
    </div>
  </div>
</div>
</template>

<script src="./toronto.js"></script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#carte{
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.interestList{
  cursor:pointer;
}
</style>
