<template lang="html">

  <div id="app">
    <BookingForm />
    <BookingsList :bookings="bookings" />
  </div>

</template>

<script>
import BirdsService from '@/services/HotelsService';
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
  },
  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/bookings")
      .then(res => res.json())
      .then(bookings => this.bookings = bookings)

      eventBus.$on('booking-added', (booking) => {
        this.bookings.push(booking)
      })

      eventBus.$on('booking-deleted', (id) => {
        let index = this.bookings.findIndex(booking => booking._id === id)
        this.bookings.splice(index, 1)
      })
    }
  }
}
</script>

<style lang="css" scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
