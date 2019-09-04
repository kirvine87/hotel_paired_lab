<template lang="html">

  <div id="app">
    <BookingForm />
    <BookingsList :bookings="bookings" />
  </div>

</template>

<script>
import BookingForm from '@/components/BookingForm';
import BookingsList from '@/components/BookingsList';

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
