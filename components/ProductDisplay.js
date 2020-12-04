app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /* html */
    `
    <div class="product-display">
        <div class="product-container">
        <div class="product-image">
            <img 
            :src="image" 
            :alt="description"
            :class="{ 'out-of-stock-img': !inStock }" />
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
            <p v-else>Out of Stock</p>
            <p>{{ shipping }} Shipping</p>
            <button 
            class="button" 
            :class="{ disabledButton: !inStock }"
            v-on:click="addToCart" 
            :disabled="!inStock">
                Add to Cart
            </button>
            <button 
            class="button" 
            v-on:click="removeById">
                Remove
            </button>
            <div 
            v-for="(variant, index) in variants" 
            v-bind:key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle"
            :class="{ active: activeClass }"
            :style="{backgroundColor: variant.color }"></div>
        </div>
    </div>
  </div>`,
  data() {
    return {
        cart: [],
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
            { id:2235, color: 'green', image: './assets/images/socks_green.jpg', quantity: 10 }
        ],
        sizes: [ 'small', 'large', 'extra-large' ]
    }
    },
    methods: {
        addToCart() {
            //this.cart += 1
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeById(id) {
            //this.cart -= 1
            this.$emit('remove-by-id', this.variants[this.selectedVariant].id)
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
        },
        shipping() {
            if(this.premium){
                return 'Free'
            } else {
                return '$99'
            }
            
        }

    }
})