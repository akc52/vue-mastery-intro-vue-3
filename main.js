const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            description: 'Sold in non-smelly option',
            selectedVariant: 0,
            brand: 'Awesome Sauce',
            activeClass: true,
            inventory: 9,
            url: 'https://www.google.ca',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id:2234, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 50 },
                { id:2235, color: 'green', image: './assets/images/socks_green.jpg', quantity: 0 }
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
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        //no longer data property, but computed property
        inStock(){
            return this.variants[this.selectedVariant].quantity
        }

    }
})
