<template lang="html">

  <div id="app">
    <BookingForm />
    <BookingsList :bookings="bookings" />
  </div>

</template>

<script>
import HotelsService from '@/services/HotelsService';
import BookingForm from '@/components/BookingForm';
import BookingsList from '@/components/BookingsList';
import { eventBus } from '@/main.js';


export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },
  components: {
    BookingForm,
    BookingsList
  },
  mounted() {
    this.fetchData();

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })

    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })

    eventBus.$on('booking-updated', (id) => {})
  },
  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/bookings")
      .then(res => res.json())
      .then(bookings => this.bookings = bookings)
    }
  }
}
</script>

<style lang="css" scoped>
html {

}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #FAEBD7;
  height: 100vh;
  padding: 0;
  margin: 0;
  align-items: center;
  background-image: url('../public/back.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

body {

}
</style>
