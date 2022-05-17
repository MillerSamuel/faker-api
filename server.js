const express=require("express");
const { faker } = require('@faker-js/faker');
const app=express();
const port=8000;




class User{
    constructor(){
        this.firstName=faker.name.firstName();
        this.lastName=faker.name.lastName();
        this.password=faker.internet.password();
        this.email=faker.internet.email();
        this.phoneNumber=faker.phone.phoneNumber();
        this.id=faker.random.numeric();
    }
}

class Company{
    constructor(){
        this.id=faker.random.numeric();
        this.name=faker.company.companyName();
        this.address={street:faker.address.streetAddress(),city:faker.address.city(),state:faker.address.state(),zipCode:faker.address.zipCode(),country:faker.address.country()};
    }
}



app.get("/api/user/new",(req,res)=>{
    let newUser= new User();
    res.json(newUser)
})

app.get("/api/company/new",(req,res)=>{
    let newCompany= new Company();
    res.json(newCompany)
})

app.get("/api/user/company",(req,res)=>{
    let newUser= new User();
    let newCompany=new Company();
    res.json([{User:newUser},{Company:newCompany}])

})






app.listen( port,()=>console.log(`listening on port ${port}`))