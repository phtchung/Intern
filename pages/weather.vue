<template>
  <div>
    <h1 class="text-center mt-5">Welcome Weather App</h1>

    <div class="card mb-3 bg-dark" style="margin:40px 100px 0 ">
      <div class="card-body text-center text-white">
        <h5>Tempurature</h5>
        <h3 class="card-title">{{weather.name}} {{country}} </h3>
        <img :src="icon" alt="">
        <div class="d-flex align-items-center text-center justify-content-center">
        <h3>{{temp}}</h3>
        <p class="card-text ml-2"><small class="text-muted" >{{describe}}</small></p>
        </div>
        <p class="card-text"style="margin-right: 700px"><small class="text-muted" >Last updated 3 mins ago</small></p>
      </div>
    </div>


    <form @submit.prevent="fetch">
      <div class="form-group" style="margin:60px 100px 20px">
        <label for="exampleInputEmail1"></label>
        <input v-model="place" @blur="displayplace = place" type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Place Name">
      </div>
      <button type="submit" style="margin:0 100px" class="btn btn-primary">Search</button>
    </form>
  </div>
</template>

<script>


export default {
  name: "weather",
  data(){
    return{
      place:"",
      displayplace:"",
      weather:{},
    }
  },
  created() {
  },
  computed:{
    icon(){
      return this.weather.weather ? `https://api.openweathermap.org/img/w/${this.weather.weather[0].icon}`: ''
    },
    country(){
      return this.weather.sys ? ', ' + this.weather.sys.country : ''
    },
    temp(){
      return this.weather.main ? Math.floor(this.weather.main.temp - 273.15) +' C': ''
    },
    describe(){
      return this.weather.weather ? this.weather.weather[0].description : ''
    }
  },
  methods:{
    //   GetInfor() {
    //   this.$axios
    //     .$get(`https://api.openweathermap.org/data/2.5/weather?q=${this.place}&appid=c7993eed6d2f9395400003de88f1dd2f`)
    //     .then(res => {
    //       this.weather = res
    //       console.log(this.weather)
    //     })
    // },
    //   async asyncData(){
    //     this.weather = await this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${this.place}&appid=c7993eed6d2f9395400003de88f1dd2f`)
    //     console.log(this.weather)
    //   },
      async fetch(){
        this.weather = await this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${this.place}&appid=c7993eed6d2f9395400003de88f1dd2f`)
        console.log(this.weather)
      }
  }
}
</script>

<style scoped>

</style>
