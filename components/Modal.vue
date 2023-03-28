<template>
  <div>
    <div v-if="func =='del'">
    <div v-if="OpenClose" class="modal fade show"
         tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog"
         style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Xóa</h5>
            <button type="button" class="btn-close" @click="OpenCloseFun"  aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Bạn có chắc chắn muốn xóa không ?</p>
          </div>
          <div class="modal-footer">
            <button type="button" @click="OpenCloseFun" class="btn btn-secondary" >Đóng</button>
            <button type="button" @click="OpenCloseFunDel" :class="'btn btn-'+variant">Xóa</button>
          </div>
        </div>
      </div>
    </div>
<!--    <button type="button" @click="OpenCloseFun" :class="'btn btn-'+variant"><i class="bi bi-pen" @click="OpenCloseFun"></i></button>-->
      <svg @click="OpenCloseFun" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen " style="cursor: pointer" viewBox="0 0 16 16">
        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
      </svg>
    </div>
    <div v-else>
      <div v-if="OpenClose" class="modal fade show"
           tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog"
           style="display: block">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Xóa</h5>
              <button type="button" class="btn-close" @click="OpenCloseFun"  aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Taskname</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
              </div>

              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01" style="padding-right: 36px">Status</label>
                <select class="form-select" id="inputGroupSelect01" style="flex: 1">
                  <option value="1">To-do</option>
                  <option value="2">Finished</option>
                  <option value="3">Review</option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" @click="OpenCloseFun" class="btn btn-secondary" >Đóng</button>
              <button type="button" @click="OpenCloseFun" :class="'btn btn-'+variant">Sửa</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" @click="OpenCloseFun" :class="'btn btn-'+variant">Sửa</button>
    </div>
  </div>
</template>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen  " style="cursor: pointer" viewBox="0 0 16 16">
<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
<button class=" btn " data-bs-toggle="modal" data-bs-target="#myModal">Open</button>
</svg>
<script>

export default {
  name: "Modal",
  props:{
    visible:Boolean,
    variant:String,
    func:String,
  },
  data(){
    return{
      OpenClose:this.visible
    }
  },

  methods:{
    OpenCloseFun(){
      this.OpenClose = !this.OpenClose
    },
    OpenCloseFunDel(){
      const task_id = localStorage.getItem('keyid');
      console.log(typeof task_id)
      // task = 3
      const arraytodojson = localStorage.getItem('todos')
      const myarray = JSON.parse(arraytodojson)
      console.log(myarray)
      const arraytodos = myarray.filter(todo => todo.id !== parseInt(task_id))
      console.log(arraytodos)

      //gửi lại cho cha

      const returnarr = JSON.stringify(arraytodos)
      localStorage.setItem('todos',returnarr)
      this.OpenClose = !this.OpenClose
    }
  },
  watch:{
    visible : function (newVal,oldVal){
      this.OpenClose = newVal;
      console.log('new ' + newVal + '==' + oldVal)
    }
  }
}
</script>

<style scoped>

</style>
