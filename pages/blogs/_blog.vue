<template>
  <div>
    <h1> I am a blog page </h1>



  <h1>Hiển thị hộp truyền</h1>
  <h3>Id vua truyen vao la {{receive_id}}</h3>

  </div>


</template>

<script>
export default {
  name: "blogs",
  data(){
    return{
      idtruyen:"",
      receive_id:null,
    }
  },
  // validation  params
  // validate({ params }){
  //   return /^\d+$/.test(params.blog)
  // },
  mounted() {
    console.log(this.$route.params)
    this.receive_id = this.$route.params.blog.slice(3,4);
    // blog là tên file






  },
}
</script>

<style scoped>

</style>
