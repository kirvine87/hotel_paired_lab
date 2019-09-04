<template lang="html">
  <div id="bookingsList">
    <div class="booking" v-for="booking of bookings">
      <h3>Name: {{booking.name}}</h3>
      <h3>Email: {{booking.email}}</h3>
      <h3>Status: {{booking.checkedIn}}</h3>

      <button @click="deleteBooking(booking._id)" name="button">Delete Booking</button>
    </div>

  </div>
</template>

<script>
import HotelsService from '@/services/HotelsService';
import { eventBus } from "@/main.js"

export default {
  name: "bookings-list",
  props: ["bookings"],
  methods: {
    deleteBooking(id){
      HotelsService.deleteBooking(id)
      .then(() => {
        eventBus.$emit('booking-deleted', id)
      })
    }
  }
}
</script>

<style lang="css" scoped>
#bookingsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
