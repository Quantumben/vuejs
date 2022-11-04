// vm = view model
// view - what the users sees
// model - data stored in our app

const vm = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            url: 'http://google.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20,
        }
    },
    methods: { 
        fullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },

        increment(){
            this.age++
        },

        updateLastName(msg,event){
        
            console.log(msg)

            this.lastName = event.target.value
        }
    }
}).mount('#app')

// setTimeout( () => {
//     vm.firstName = 'Bob'
// },2000)


// Vue.createApp({
//     data(){
//         return {
//             firstName: 'Jane',
//             lastName: 'Doe'
//         }
//     }
// }).mount('#app2')