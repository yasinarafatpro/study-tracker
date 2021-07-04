import { getRepository } from 'typeorm';
import User from '../src/entity/User';
require('should')
const cases=require('./cases/userCases');
const request=require('node-fetch')
const config=require('./config');

describe('signUp Test',function(){
    this.timeout(10000);

    before(function(){
        require('../index');
    })

    after(async function(){
        await getRepository(User).delete(
            {
                email:cases.case_01.input.email,
            }
        );
    });
    it('Should login a new user',async()=>{
        const resp=await request(`${config.host}/api/v1/user`,{
            method:'POST',
            body:JSON.stringify(cases.case_01.input),
            headers:{'Content-Type': 'application/json'},
        });
         resp.should.be.an.Object();
         resp.should.have.property('status');
         resp.status.should.be.eql(201);
    });
    it('Should not register a new user:invalid name',async()=>{
        const resp=await request(`${config.host}/api/v1/user`,{
            method:'POST',
            body:JSON.stringify(cases.case_02.input),
            headers:{'Content-Type': 'application/json'},
        });
         resp.should.be.an.Object();
         resp.should.have.property('status');
         resp.status.should.be.eql(400);
    });
    it('Should not register a new user:invalid email',async()=>{
        const resp=await request(`${config.host}/api/v1/user`,{
            method:'POST',
            body:JSON.stringify(cases.case_03.input),
            headers:{'Content-Type': 'application/json'},
        });
         resp.should.be.an.Object();
         resp.should.have.property('status');
         resp.status.should.be.eql(400);
    });
    it('Should register a new user:invalid password',async()=>{
        const resp=await request(`${config.host}/api/v1/user`,{
            method:'POST',
            body:JSON.stringify(cases.case_04.input),
            headers:{'Content-Type': 'application/json'},
        });
         resp.should.be.an.Object();
         resp.should.have.property('status');
         resp.status.should.be.eql(400);
    });
    
});