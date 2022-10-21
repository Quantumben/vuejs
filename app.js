// vm = view model
// view - what the users sees
// model - data stored in our app

const vm = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            url: 'http://google.com',
        }
    },
    methods: { 
        fullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#app')

setTimeout( () => {
    vm.firstName = 'Bob'
},2000)


// Vue.createApp({
//     data(){
//         return {
//             firstName: 'Jane',
//             lastName: 'Doe'
//         }
//     }
// }).mount('#app2')