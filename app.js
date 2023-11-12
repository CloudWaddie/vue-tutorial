const app = Vue.createApp({
    //data, functions(methods:), and more
    //template: '<h2>example</h2>'

    //return an object with the data
    data() {
        return {
            //title: 'The Final Empire',
            //author: 'Brandon Sanderson',
            //age: 45,
            //x: 0,
            //y: 0,
            url: 'https://netninja.dev',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss' },
                { title: 'the way of kings', author: 'brandon sanderson' },
                { title: 'the final empire', author: 'brandon sanderson' },
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')