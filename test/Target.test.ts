import { getRepository } from "typeorm";
import User from "../src/entity/User";

require('should')
const request=require('node-fetch');
const config=require('./config');
const cases=require('./cases/userCases')

describe('Target Test',function(){
    this.timeout(10000);
    let authorization;

    before(function(){
        require('../index');
    })
    after(async function(){
        await getRepository(User).delete({
            email:cases.case_01.email
        });
    });
    it('should create a new user',async()=>{
        const resp=await request(`${config.host}/api/v1/user`,{
            method:'POST',
            body:JSON.stringify(cases.case_01.input),
            headers:{'Content-Type':'application/json'},
        });
        resp.should.be.an.Object();
        resp.should.have.property('status');
        resp.status.should.be.eql(201);
    });
    it('Should login to the user', async () => {
        const resp = await request(`${config.host}/api/v1/user/login`, {
          method: 'POST',
          body: JSON.stringify({
            email: 'arafat@gmail.com',
            password: '123456',
          }),
          headers: {'Content-Type': 'application/json'},
        });
        resp.should.be.an.Object();
        resp.should.have.property('status');
        resp.status.should.be.eql(200);
        const respJson = await resp.json();
    
        respJson.should.be.an.Object();
        respJson.should.have.property('data');
        respJson.data.should.be.an.Object();
        respJson.data.should.have.property('jwtToken');
        respJson.data.should.have.property('user');
        respJson.data.user.should.be.an.Object();
        authorization=respJson.data.jwtToken;
    });
    it('should add a new target',async()=>{
        const resp=await request(`${config.host}/api/v1/target`,{
            method:'POST',
            body:JSON.stringify({
                startDate:"2021-07-06T12:13:08+00:00",
                endDate:"2021-07-06T12:13:08+00:00",
                time:340,
                note:"preparing for job apply and practice"
            }),
            headers:{
            'Content-Type':'application/json',
            'authorization':`Bearer ${authorization}`,
        },
        });
        resp.should.be.an.Object();
        resp.should.have.property('status');
        resp.status.should.be.eql(201);

        const respJson=await resp.json();
        respJson.should.be.an.Object();
        respJson.should.have.property('data');
    });
});