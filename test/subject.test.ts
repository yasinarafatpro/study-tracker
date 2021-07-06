import { getRepository } from 'typeorm';
import User from '../src/entity/User'
const cases=require('./cases/userCases')
const request=require('node-fetch')
const config=require('./config')

require('should')


describe('Subject Test',function(){
    let authorization;
    this.timeout(10000);

    before(function(){
        require('../index');
    });
    after(async function(){
        await getRepository(User).delete({
            email:cases.case_01.input.email,
        });
    });
    it('should create a new user',async()=>{
        const resp=await request(`${config.host}/api/v1/user`,{
            method:'POST',
            body:JSON.stringify(cases.case_01.input),
            headers: {'Content-Type': 'application/json'},
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
    it('Should add a subject',async()=>{
        const resp=await request(`${config.host}/api/v1/subject`,{
            method:'POST',
            body:JSON.stringify({
                name:'javascript',
                discription:'programming language',
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