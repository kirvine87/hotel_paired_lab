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
