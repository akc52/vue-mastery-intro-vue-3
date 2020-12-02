const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            description: 'Sold in non-smelly option',
            image: './assets/images/socks_green.jpg',
            inventory: 9,
            url: 'https://www.google.ca',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id:2234, color: 'blue', image: './assets/images/socks_blue.jpg' },
                { id:2235, color: 'green', image: './assets/images/socks_green.jpg' }
            ],
            sizes: [ 'small', 'large', 'extra-large' ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
