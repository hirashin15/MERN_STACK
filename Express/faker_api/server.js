class User {
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
  }
}

// console.log(new User());

class Company {
  constructor() {
    this.companyName = this.company.companyName();
    this.catchPhrase = this.company.catchPhrase();
  }
}

// console.log(new Company());

const express = require("express");
const app = express();
const faker = require("faker");

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
      const user1 = new User();
      console.log(user1);
      res.json( user1 );
  });

app.get("/api/companies/new", (req, res) => {
      const comp1 = new Company();
      console.log(comp1)
      res.json( comp1 );
  });
    
app.get("/api/user/company", (req, res) => {
    const user2 = new User();
    const comp2 = new Company();
    res.json( user2, comp2 );
  });


const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);