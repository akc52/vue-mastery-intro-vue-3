const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Sold in non-smelly option',
            image: './assets/images/socks_green.jpg',
            inventory: 9,
            url: 'https://www.google.ca',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id:2234, color: 'blue' },
                { id:2235, color: 'green' }
            ],
            sizes: [ 'small', 'large', 'extra-large' ]
        }
    }
})
