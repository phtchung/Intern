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
              <b-form-input id="input-default" v-model="newtaskname" ></b-form-input>
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
<!--Modal 2 thêm -->
    <div>
      <b-modal centered  ref="my-modal2" hide-footer  title="Thêm Task">
        <div class="modal-body">
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
          <button type="button" data-bs-dismiss="modal" @click="AddhideModal2" class="btn btn-danger" >Thêm</button>

        </div>
      </b-modal>
    </div>

    <h3 class="text-center mb-4">Todo App</h3>

    <div style="max-width: 700px;margin: 0 auto">
      <div class="row" >
        <button  class="btn btn-success" @click="showModal2">Add Task</button>
      </div>
    </div>

    <div style="margin: 50px auto">
      <table class="table table-bordered w-75 m-auto">
        <thead>
        <tr class="text-center" >
          <th width="11%" scope="col">Task No</th>
          <th width="50%" scope="col">
            <div class="d-flex justify-content-between align-items-center">
            <span style="width: 30%">Task</span>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="search" @input="updateTable"></b-form-input>
            </div>
          </th>
          <th width="19%"  scope="col">Status</th>
          <th width="9%" scope="col">#</th>
          <th width="9%" scope="col">#</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(todo,index) in searchData" :key="index">
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
      length:null,
      search:'',
      searchData:[],
      todos:[
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
      this.searchData = this.todos
      this.length = this.todos.length
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
      this.searchData = this.todos
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
    showModal2() {
      this.$refs['my-modal2'].show()
    },
    AddhideModal2() {
      this.todos.push({id:this.length+1 ,taskname: this.newtaskname , status: this.selected})
      console.log(this.todos)
      this.searchData = this.todos
      localStorage.setItem("array",JSON.stringify(this.todos))
      this.$refs['my-modal2'].hide()
      this.newtaskname ='';
      this.selected=null
      this.length+=1;
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
      this.searchData = this.todos
      localStorage.setItem("array",JSON.stringify(this.todos))
      this.$refs['my-modal1'].hide()
      this.selected = null;
      this.newtaskname="";
    },
    updateTable() {
      this.searchData = this.searchTable(this.search);
    },
     searchTable(query){
       return this.todos.filter(row => {
          return row['taskname'].toLowerCase().includes(query.toLowerCase())
       });

},

  },
}
</script>

<style scoped>

</style>
