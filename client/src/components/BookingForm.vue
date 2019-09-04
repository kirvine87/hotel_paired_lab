<template lang="html">

  <form id="bookings-form" v-on:submit="saveBooking" method="post">
    <h2>Hotel Pull and Push</h2>

      <div class="row">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required/>
    </div>

      <div class="row">
      <label for="email">E-mail:</label>
      <input type="email" id="email" placeholder="YourName@gmail.com" pattern=".+@gmail.com" v-model="email" required/>
    </div>

      <div class="row">

      <label for="checkedIn">Check In</label>
      <input type="checkbox" id="checkedIn" v-model="checkedIn">
    </div>

      <input type="submit" value="Save">

  </form>

</template>

<script>
import HotelsService from "@/services/HotelsService"
import { eventBus } from "@/main.js";

export default {
  name: "bookings-form",
  data(){
    return {
      name: "",
      email: "",
      checkedIn: false
    }
  },
  methods: {
    saveBooking(e){
      e.preventDefault()
      const booking = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      }
      HotelsService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added', res))
    }
  }
}
</script>

<style lang="css" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
}

label {
  width: 10em;
}
</style>
