<template lang="html">
  <div id="bookingsList">
    <div class="booking" v-for="booking of bookings">
      <h3>Name: {{booking.name}}</h3>
      <h3>Email: {{booking.email}}</h3>
      <h3 id="status" v-if="booking.checkedIn" @click="updateStatus(booking)">Checked In</h3>
      <h3 id="status" v-else @click="updateStatus(booking)">
        Not Checked In</h3>
      <h3> </h3>


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
    },
    updateStatus(booking){
      const bookingID = booking._id;

      booking.checkedIn = !booking.checkedIn

      const bookingStatus = {checkedIn: booking.checkedIn};

      HotelsService.updateBooking(bookingID, bookingStatus)
      // .then(() => {
      //   eventBus.$emit('booking-updated', bookingStatus)
      // })
    }
  }
}
</script>

<style lang="css" scoped>

#bookingsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-height: 50vh;
  overflow: scroll;
}

div.booking {
  border-left: 1px solid white;
  padding: 20px;
  width: 310px;
  background-color: black;
  color: white;
  opacity: 0.8;
  box-shadow: 0 0 5px white;
  margin: 0.13em;
}

#booking {
  display: flex;
  justify-content: space-between;
}

#status:hover {
  color: green;
  cursor: pointer;
}

</style>
