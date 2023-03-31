
// export const state = () => ({
//   todoarr: []
// })
// export const mutations = {
//   setArr(state,arr){
//     state.todoarr = arr
//   },
//
//   addArr(state,todo) {
//     state.todoarr.push(todo)
//   },
//   updateArr(state, todo) {
//     const index = state.todoarr.findIndex((item) => item.id === todo.id)
//     if (index !== -1) {
//       // xóa phần tử ở vị trí index , thêm 1 phần từ là todo vào đấy
//       state.todoarr.splice(index, 1, todo)
//     }
//   },
//   removeFromArr(state, id){
//     const index = state.todoarr.findIndex(item => item.id === id);
//     if (index !== -1) {
//       state.todoarr.splice(index, 1);
//     }
//   },
// }

// export default new Vuex.Store({
//   modules:{
//     todoapp:{
//       namespaced:true,
//       state:{
//         todoarr:[],
//       },
//       mutations:{
//         setArr(state,arr){
//           state.todoarr = arr
//         },
//
//         addArr(state,todo) {
//           state.todoarr.push(todo)
//         },
//         updateArr(state, todo) {
//           const index = state.todoarr.findIndex((item) => item.id === todo.id)
//           if (index !== -1) {
//             // xóa phần tử ở vị trí index , thêm 1 phần từ là todo vào đấy
//             state.todoarr.splice(index, 1, todo)
//           }
//         },
//         removeFromArr(state, id){
//           const index = state.todoarr.findIndex(item => item.id === id);
//           if (index !== -1) {
//             state.todoarr.splice(index, 1);
//           }
//         },
//       },
//       actions:{
//         setArr(context, arr) {
//           context.commit('GET_ARR',arr)
//         },
//         addArr(context , todo){
//           context.commit('ADD_ARR',todo)
//         },
//         updateArr(context, todo){
//           context.commit('UPDATE_ARR',todo)
//         },
//         removeFromArr(context , id){
//           context.commit('REMOVE_ARR',id)
//         }
//       },
//       // getters:{
//       //   todoItems:(state) => {
//       //     return state.todoarr
//       //   }
//       // },
//     }
//   }
// })

// GET_ARR: (state,arr)  => {
//   state.todoarr = arr
// },
//
//   ADD_ARR :(state,todo) => {
//   state.todoarr.push(todo)
// },
//   UPDATE_ARR :(state, todo) => {
//   const index = state.todoarr.findIndex((item) => item.id === todo.id)
//   if (index !== -1) {
//     // xóa phần tử ở vị trí index , thêm 1 phần từ là todo vào đấy
//     state.todoarr.splice(index, 1, todo)
//   }
// },
//   REMOVE_ARR: (state, id)=> {
//   const index = state.todoarr.findIndex(item => item.id === id);
//   if (index !== -1) {
//     state.todoarr.splice(index, 1);
//   }
// },
