use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Silly Billy",
    email: "SillyBoi@gmail.com",
    checkedIn: false
  },
  {
    name: "Stevey Wevey",
    email: "Wevey123@gmail.com",
    checkedIn: false
  },
  {
    name: "Dancy Boi",
    email: "S1rdanc3Alot@gmail.com",
    checkedIn: true
  }
]);
