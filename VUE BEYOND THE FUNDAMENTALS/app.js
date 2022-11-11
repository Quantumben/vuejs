let vm = Vue.createApp({
  // data() {
  //   return {
  //     message: "Hello world!"
  //   }
  // },
  //template: ``
})

vm.component('hello', {
  template: `<h1>{{ message }}</h1>`,
  data() {
    return {
      message: 'Hello World Ben!'
    }
  }
})

vm.mount('#app')
