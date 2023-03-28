<template>

  <div>
    <h1>Welcome Indexpage</h1>
    <nuxt-link :to="`/blogs/${id}`" >
      <a class="navbar-brand">Truyền id ở đây</a>
    </nuxt-link>
    <h3>{{id}}</h3>

    <div class="row justify-content-around">
    <div v-for="magic in magics" :key="magic.id" class="card border-primary mb-3 col-sm-3" style="max-width: 18rem;margin-top: 30px;">
      <div class="card-header">
        <nuxt-link :to="`/blogs/id=${magic_id}`">
          <div class="btn" @click="magic_id = magic.id+1">
            {{magic.name}} , có id la {{magic.id+1}}
          </div>
        </nuxt-link>
      </div>
      <div class="card-body text-primary">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    </div>
  <Tutorial></Tutorial>

  </div>
</template>

<script>
export default {

  asyncData(){
    return{
      title:"Index",
    }
  },
  name: 'IndexPage',

  head(){
    return{
      title:"Indexpage"
    }
  },
  data(){
    return{
      magics:[
        {
          id:1,
          name : "Day la so 1"
        },
        {
          id:2,
          name : "Day la so 2"
        },
        {
          id:3,
          name : "Day la so 3"
        },
        {
          id:4,
          name : "Day la so 4"
        },
      ],
      magic_id:null,
      id:"idtruyenla1",
    }
  },

}
</script>
<style scoped>

</style>
