let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  //template: ``
})

vm.mount('#app')

// vm2 = Vue.createApp({
//   data(){
//     return {
//       message: "Hello world"
//     }
//   },
//   render(){
//     return Vue.h(
//       'h1',
//       this.message
//     )
//   }
// }).mount("#app2")

//h => hyperscript