app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /* html */
    `      <div class="product-display">
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
          v-if="cart > 0" 
          class="button" 
          v-on:click="removeFromCart">
            Remove One
          </button>
        <p>{{ description }}</p>
        <div 
          v-for="(variant, index) in variants" 
          v-bind:key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle"
          :class="{ active: activeClass }"
          :style="{backgroundColor: variant.color }"></div>
        <figure>
          <figcaption>Details:</figcaption>
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
        </figure>
        <figure>
          <figcaption>Available in these sizes:</figcaption>
          <ul>
            <li v-for="size in sizes">{{ size }}</li>
          </ul>
        </figure>
        <a :href="url">Learn More!</a>
    </div>
    </div>
  </div>`,
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