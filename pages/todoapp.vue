<template>
  <div class="container mt-5">

    <div>
      <b-modal ref="my-modal" hide-footer  title="Xóa Task">
        <div class="modal-body">
          <h5>Bạn có chắc chắn muốn xóa không ?</h5>
        </div>
        <div class="modal-footer">
          <button type="button" data-bs-dismiss="modal" @click="hideModal" class="btn btn-secondary" >Đóng</button>
          <button type="button" data-bs-dismiss="modal"  @click="DelhideModal"  class="btn btn-success">Xóa</button>
        </div>
      </b-modal>
    </div>
<!--    Modal 1 sửa -->
    <div>
      <b-modal class="modal-dialog modal-dialog-centered" ref="my-modal1" hide-footer  title="Sửa Task">
        <div class="modal-body ">
          <b-row class="my-1 align-items-center">
            <b-col sm="3">
              <label style="padding: 0" >Task name :</label>
            </b-col>
            <b-col sm="9">
              <b-form-input id="input-default" v-model="newtaskname" placeholder="Enter new name"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1 align-items-center">
            <b-col sm="3">
              <label style="padding: 0" >Status :</label>
            </b-col>
            <b-col sm="9">
              <b-form-select v-model="selected"  >
                <!-- This slot appears above the options from 'options' prop -->
                <template #first>
                  <b-form-select-option :value="null" disabled>--Chọn trạng thái task --</b-form-select-option>
                </template>
                <!-- These options will appear after the ones from 'options' prop -->
                <b-form-select-option value="To-do">To-do</b-form-select-option>
                <b-form-select-option value="Finished">Finished</b-form-select-option>
                <b-form-select-option value="Review">Review</b-form-select-option>
              </b-form-select>
            </b-col>
          </b-row>

        </div>
        <div class="modal-footer">
          <button type="button" data-bs-dismiss="modal" @click="hideModal1" class="btn btn-secondary" >Đóng</button>
          <button type="button" data-bs-dismiss="modal"  @click="fixHindModal"  class="btn btn-danger">Sửa</button>
        </div>
      </b-modal>
    </div>


    <h3 class="text-center mb-4">Todo App</h3>


    <div style="max-width: 700px;margin: 0 auto">
      <form class="row" >
        <div class="form-group col-10 m-0 p-0" >
          <input style="line-height: 54px" type="text" v-model="newtask" class="form-control"  placeholder="Enter task">
        </div>
        <button @click.prevent="addTask(newtask)" type="submit" class="btn btn-sm btn-primary  col-2">Submit</button>
      </form>
    </div>

    <div style="margin: 50px auto">
      <table class="table table-bordered w-75 m-auto">
        <thead>
        <tr class="text-center" >
          <th width="11%" scope="col">Task No</th>
          <th width="50%" scope="col">Task</th>
          <th width="19%"  scope="col">Status</th>
          <th width="9%" scope="col">#</th>
          <th width="9%" scope="col">#</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(todo,index) in todos" :key="index">
          <th class="text-center" scope="row">{{index+1}}</th>
          <td v-if="todo.status === 'Finished'" style="text-decoration: line-through"> {{todo.taskname}}</td>
          <td v-else bgcolor="#db7093" >{{todo.taskname}}</td>
          <td class="text-center">{{todo.status}}</td>
          <td @click="current_id = getId(todo.id)"><button  class="btn btn-success" @click="showModal">Xóa</button></td>
          <td @click="current_id = getId(todo.id)"><button   class="btn btn-success" @click="showModal1">Sửa</button> </td>
        </tr>
        </tbody>
      </table>
    </div>


    <!-- The Modal -->
<!--    <div class="modal fade " id="1myModal">-->
<!--      <div class="modal-dialog modal-dialog-centered">-->
<!--        <div class="modal-content">-->
<!--          <div class="modal-header">-->
<!--            <h5 class="modal-title">Xóa</h5>-->
<!--            <button type="button" class="btn-close" data-bs-dismiss="modal"  >&times;</button>-->
<!--          </div>-->
<!--          <div class="modal-body">-->
<!--            <p>Bạn có chắc chắn muốn xóa không ?</p>-->
<!--          </div>-->
<!--          <div class="modal-footer">-->
<!--            <button type="button" data-bs-dismiss="modal" class="btn btn-secondary" >Đóng</button>-->
<!--            <button type="button" data-bs-dismiss="modal" class="btn btn-success">Xóa</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "todoapp",
  components:{

  },
  data(){
    return{
      newtask:"",
      current_id:0,
      selected:null,
      newtaskname:"",
      todos:[
        // {
        //   // id:1,
        //   // taskname:"task1",
        //   // status:"To-do",
        // },
      ],
    }
  },
  created(){
    this.storage();
  },

  methods:{
    storage(){
      if (process.browser)
      this.todos = JSON.parse(localStorage.getItem("array") || "[]")
    },

    addTask(task){
      this.todos.push({id:this.todos.length+1 ,taskname: task , status: "To-do"})
      console.log(this.todos)
      localStorage.setItem("array",JSON.stringify(this.todos))
    },
    getId(ID){
      this.current_id = ID
      console.log(this.current_id)
      localStorage.setItem('id',this.current_id)
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    DelhideModal(){
      const id = parseInt(localStorage.getItem('id'))
      this.todos = this.todos.filter((todo) => todo.id !== id)
      localStorage.setItem("array",JSON.stringify(this.todos))
      this.$refs['my-modal'].hide()
    },
    showModal1() {
      this.$refs['my-modal1'].show()
    },
    hideModal1() {
      this.$refs['my-modal1'].hide()
      this.selected = null;
      this.newtaskname="";
    },
    fixHindModal(){
      const id = parseInt(localStorage.getItem('id'))
      for(let i = 0 ; i < this.todos.length ; i++){
        if(this.todos[i].id == id){
          console.log(i)
          this.todos[i].taskname = this.newtaskname;
          this.todos[i].status = this.selected
        }
      }
      localStorage.setItem("array",JSON.stringify(this.todos))
      this.$refs['my-modal1'].hide()
      this.selected = null;
      this.newtaskname="";
    }

  },
}
</script>

<style scoped>

</style>
