<template>
  <div class="container mt-5">

    <div>
      <b-modal ref="my-modal" hide-footer  title="Xóa Task">
        <div class="modal-body">
          <h5>Bạn có chắc chắn muốn xóa không ?</h5>
        </div>
        <div class="modal-footer">
          <button type="button" data-bs-dismiss="modal" @click="hideModal" class="btn btn-secondary" >Đóng</button>
          <button type="button" data-bs-dismiss="modal"  @click="removeFromArr"  class="btn btn-success">Xóa</button>
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
              <b-form-input id="input-default" :v-model="nameState ? value.taskname : newtaskname "  :state="nameState" ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1 align-items-center">
            <b-col sm="3">
              <label style="padding: 0" >Status :</label>
            </b-col>
            <b-col sm="9">
<!--              <b-form-select v-model="value.selected"  >-->
                <b-form-select
                  v-model="value.status"
                  :options="options"

                  class="mb-3"
                  value-field="item"
                  text-field="name"
                ></b-form-select>
                <!-- This slot appears above the options from 'options' prop -->
<!--                <template #first>-->
<!--                  <b-form-select-option  >{{value.selected}}</b-form-select-option>-->
<!--                </template>-->
<!--                &lt;!&ndash; These options will appear after the ones from 'options' prop &ndash;&gt;-->
<!--                <b-form-select-option value="New">New</b-form-select-option>-->
<!--                <b-form-select-option value="Inprogress">Inprogress</b-form-select-option>-->
<!--                <b-form-select-option value="Done">Done</b-form-select-option>-->
<!--              </b-form-select>-->
            </b-col>
          </b-row>

        </div>
        <div class="modal-footer">
          <button type="button" data-bs-dismiss="modal" @click="hideModal1" class="btn btn-secondary" >Đóng</button>
<!--          <button type="button" data-bs-dismiss="modal"  @click="updateArr"  class="btn btn-danger">Sửa</button>-->
          <button type="button" data-bs-dismiss="modal" @click="updateArr" class="btn btn-danger" >Sửa</button>
        </div>
      </b-modal>
    </div>
<!--Modal 2 thêm -->
    <div>
      <b-modal centered  ref="my-modal2" hide-footer hide-header>
        <div class="modal-header d-flex justify-content-around p-2">
          <div v-if="check === 1" class="modal-title">Thêm task</div>
          <div v-else class="modal-title">Sửa task</div>
          <button type="button" aria-label="Close" @click="hideModal2" class="close">×</button>
        </div>
        <div class="modal-body">
          <b-row class="my-1 align-items-center">
            <b-col sm="3">
              <label style="padding: 0" >Task name :</label>
            </b-col>
            <b-col sm="9">
              <b-form-input id="input-default" v-model="newtaskname"  aria-describedby="input-live-help input-live-feedback"  :state="nameState" placeholder="Enter new name"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1 align-items-center">
            <b-col sm="3">
              <label style="padding: 0" >Status :</label>
            </b-col>
            <b-col sm="9">
              <b-form-select v-model="selected" aria-describedby="input-live-help input-live-feedback">
                <!-- This slot appears above the options from 'options' prop -->
                <template #first>
                  <b-form-select-option :value="null" disabled>-- Choose status --</b-form-select-option>
                </template>
                <!-- These options will appear after the ones from 'options' prop -->
                <b-form-select-option value="New">New</b-form-select-option>
                <b-form-select-option value="Inprogress">Inprogress</b-form-select-option>
                <b-form-select-option value="Done">Done</b-form-select-option>
              </b-form-select>
            </b-col>
          </b-row>

          <b-row class="my-1 align-items-center">
            <b-col sm="3">
              <label style="padding: 0" >Description </label>
            </b-col>
            <b-col sm="9">
              <b-form-input  v-model="description" placeholder="Enter description" ></b-form-input>
            </b-col>
          </b-row>
        </div>
        <div class="modal-footer">
          <button v-if="check === 1" type="button" data-bs-dismiss="modal" @click="addToArr" class="btn btn-danger" >Thêm</button>
          <button v-else type="button" data-bs-dismiss="modal" @click="updateArr" class="btn btn-danger" >Sửa</button>
        </div>
      </b-modal>
    </div>

    <h3 class="text-center mb-4">{{$t("app_name")}}</h3>
    <SwitchLanguage @inputData = "updatelanguage"/>

    <div style="max-width: 700px;margin: 0 auto">
      <div class="row" >
        <button  class="btn btn-success" @click="showModal2(1)">{{$t("add_btn")}}</button>
      </div>
    </div>

    <div style="margin: 50px auto">
      <table class="table table-bordered w-75 m-auto">
        <thead>
        <tr class="text-center" >
          <th width="11%" scope="col">{{$t("table_col_one")}}</th>
          <th width="50%" scope="col">
            <div class="d-flex justify-content-between align-items-center">
            <span style="width: 30%">{{$t("table_col_two")}}</span>
            <b-form-input size="sm" class="mr-sm-2" :placeholder="$t('search_tab')" v-model="search" @blur="updateTable"></b-form-input>
            </div>
          </th>
          <th width="19%"  scope="col">{{$t("table_col_three")}}</th>
          <th width="9%" scope="col">#</th>
          <th width="9%" scope="col">#</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(todo,index) in searchData" :key="index">
          <th class="text-center" scope="row">{{index+1}}</th>
          <td v-if="todo.status === 'Done'" style="text-decoration: line-through"> {{todo.taskname}}</td>
          <td v-else bgcolor="#db7093" >{{todo.taskname}}</td>
          <td class="text-center">{{todo.status}}</td>
          <td @click="getId(todo.id)"><button  class="btn btn-success" @click="showModal">Xóa</button></td>
          <td ><button   class="btn btn-success" @click="showModal2(0,getId(todo.id))">Sửa</button> </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import SwitchLanguage from '../components/SwitchLanguage.vue'

export default {
  name: "todoapp",
  components:{
    SwitchLanguage
},
  data(){
    return{
      language:"",
      check:0,
      newtask:"",
      description:'',
      current_id:0,
      selected:null,
      newtaskname:"",
      length:null,
      search:'',
      searchData:[],
      todos:[
      ],
      value:{},
      options: [
        { item: 'New', name: 'New' },
        { item: 'Review', name: 'Review' },
        { item: 'Done', name: 'Done' },
      ]
    }
  },
  created(){
    this.storage();
  },
  mounted() {
    this.$watch(this.language, (newValue, oldValue) => {
      console.log(oldValue)
      console.log(newValue)
      this.$i18n.locale = newValue

      console.log('local mới '+this.$i18n.locale)
    })
  },
  computed:{
    todoItems() {
      return this.$store.getters.todoItems
    },
    nameState() {
      if(this.value.taskname) return !this.containsSpecialCharacters(this.value.taskname)
      return !this.containsSpecialCharacters(this.newtaskname)
    },
    getValue(){
      const index = this.todoItems.findIndex(item => item.id === this.current_id);
      if (index !== -1) {
        return this.todoItems[index]
      }
    }
  },

  methods:{
    updatelanguage(langu){
      this.$i18n.locale = langu
      console.log(langu)
    },
    storage(){
      this.$store.commit('setArr',this.todos)
      this.searchData = this.todos
      this.length = this.todos.length
    },
    containsSpecialCharacters(str){
  // Define a regular expression to match special characters
      const regex = /[^\w\s]/gi;


      if(str.length === 0){
        return true
      }else return regex.test(str);
},
    getId(ID){
      this.current_id = ID
      localStorage.setItem('id',this.current_id)
      this.value = this.getValue;
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
    showModal2(check) {
      this.check = check
      if(check === 1){
        this.newtaskname ='';
        this.selected=null
        this.description='';
      }else{
        // const id = parseInt(localStorage.getItem('id'))
        // console.log(id)
        // localStorage.setItem('id',id)
        // this.value = this.getValue;
        // console.log(this.current_id)
        this.newtaskname = this.getValue.taskname;
        this.selected = this.getValue.status
        this.description = this.getValue.description
        this.length+=1;
      }
      this.$refs['my-modal2'].show()
    },
    hideModal2() {
      this.$refs['my-modal2'].hide()
      this.selected = null;
      this.newtaskname="";
    },
    AddhideModal2() {
      this.todos.push({id:this.length+1 ,taskname: this.newtaskname , status: this.selected,description:this.description})
      console.log(this.todos)
      this.searchData = this.todos
      localStorage.setItem("array",JSON.stringify(this.todos))
      this.$refs['my-modal2'].hide()
      this.newtaskname ='';
      this.selected=null
      this.length+=1;
    },
    addToArr(){
      if(!this.nameState) return this.Refuse();
      const temp = {id:this.length+1 ,taskname: this.newtaskname , status: this.selected,description:this.description}
      this.$store.commit('addArr',temp)
      // gán mảng mới cho search để còn tìm
      this.searchData = this.todoItems
      this.$refs['my-modal2'].hide()

    },
    Refuse(){
      this.$bvToast.toast(`Task name not valid`, {
        title: 'Invalid Input',
        autoHideDelay: 5000,

      })
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
    updateArr(){
      if(!this.nameState) return this.Refuse();
      const id = parseInt(localStorage.getItem('id'))
      console.log('id sua la '+ id)
      const temp = {id:id,taskname: this.newtaskname , status: this.selected,description:this.description}
      console.log(temp)
      //truyền vào bên store để update
      this.$store.commit('updateArr',temp)
      this.searchData = this.todoItems
      this.$refs['my-modal2'].hide()
      this.selected = null;
      this.newtaskname="";
      this.description="";
    },
    removeFromArr(){
      const id = parseInt(localStorage.getItem('id'))
      this.$store.commit('removeFromArr',id)
      this.searchData = this.todoItems
      this.$refs['my-modal'].hide()
    },
    updateTable() {
      console.log('ccccc')
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

/*b-form-input >>> form-control.is-valid:focus{*/
/*  background-image: none;*/
/*}*/
</style>
