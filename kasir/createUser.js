url = "https://kasir-api.belajarqa.com"

const request = require("supertest")(url)
const expect = require("chai").expect;

var token = {};
// memulai pengujian
describe("Testing KasirAja", function(){ //scenario1
    it("sukses login", async function() { //testcase1
        const response = await request
        .post("/authentications") //HTTP method dan endpoint
        .send({
            email: "sanber@gmail.com",
            password: "sanber"
        });
        expect(response.status).to.eql(201)
        expect(response.body.status).to.eql('success')
        expect(response.body.message).to.eql('Authentication berhasil ditambahkan')
        token = response.body.data.accessToken
        //console.log (token)
    })
    it("create user", async function() { //scenario1
        const response = await request
        .post("/users") //HTTP method dan endpoint
        .set('Authorization', `Bearer ${token}`)
        .send({
            name: "ade",
            email: "ade@gmail.com",
            password: "ade"
        });
        expect(response.status).to.eql(201)
        expect(response.body.status).to.eql('success')
        expect(response.body.message).to.eql('User berhasil ditambahkan')
        //userID = response.body.data.userId
        //console.log(userID)
        //console.log(response.body.data.name)
    })
})