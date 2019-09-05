<template lang="html">
  <div>

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

      <label id="checkintext" for="checkedIn">Check In</label>
      <input type="checkbox" id="checkedIn" v-model="checkedIn">
    </div>

      <input type="submit" value="Save">

  </form>

  <h1>Welcome</h1>
  </div>
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
      this.name = this.email = "";
      this.checkedIn = false;
    }
  }
}
</script>

<style lang="css" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  background-color: black;
  opacity: 0.8;
  color: white;
  box-shadow: 0 0 30px white;
}

#checkedIn {
  position: relative;
  left: 4px;
}

#checkintext {
  position: relative;
  left: -56px;
}

.row {
  display: flex;
  flex-direction: row;
  padding: 1%;
}

h1 {
  text-align: center;
  padding: 50px;
  color: white;
  background-color: black;
  opacity: 0.8;
  box-shadow: 0 0 30px white;
}


label {
  width: 10em;
}
</style>
