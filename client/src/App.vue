<template lang="html">

  <div id="app">
    <BookingForm />
    <BookingsList />
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
body {
}
</style>
