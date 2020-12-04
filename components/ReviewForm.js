app.component('review-form', {
  template:
  /*html*/
  `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
    <br>
    <label for="recommend">Would you recommend this product?</label>
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
    </select>
    <input class="button" type="submit" value="Submit">  

  </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommend: null,
    }
  },
  methods: {
    onSubmit() {
      if(this.name ==='' || this.review === '' || this.rating === null || this.recommed === null) {
        alert('Alert is incomplete, please fill every field')
        return
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommended: this.recommended
      }
      this.$emit('review-submitted', productReview)

      this.name = ''
      this.review = ''
      this.rating = null
      this.recommend = null
    }
  },
  computed: {
    recommended() {
        if(this.recommend){
            return 'Yes, I recommend this product'
        } else {
            return 'I do not recommend this product'
        }
        
    }
}
})