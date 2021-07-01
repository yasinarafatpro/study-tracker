require('should');
const request=require('node-fetch');
const config=require('./config')
const cases=require('./cases/signUp')

describe('SignUp Test',function(){
    this.timeout(10000);

    before(function(){
        require('../index');
    });

    after(function(){

    });

    it('Should create a new user',async()=>{
        const resp = await request(`${config.host}/api/v1/user`, {
            method: 'POST',
            body: JSON.stringify(cases.case_01.input),
            headers: {'Content-Type': 'application/json'},
          });
          resp.should.be.an.object();
          resp.should.have.porperty('status');
          resp.status.should.be.equal(201);

        });

        it('Should not create a new user:invalid name',async()=>{
            const resp = await request(`${config.host}/api/v1/user`, {
                method: 'POST',
                body: JSON.stringify(cases.case_02.input),
                headers: {'Content-Type': 'application/json'},
              });
            resp.should.be.an.object();
            resp.should.have.porperty('status');
            resp.status.should.be.equal(400);

            const respjson=await resp.json();
            respjson.should.be.an.Object();
            respjson.should.have.property('error');
            respjson.error.should.be.an.Object();
            respjson.error.should.have.property('name');
            respjson.error.name.should.be.eql('BadRequestError');
            respjson.error.should.have.property('statusCode');
            respjson.error.statusCode.should.be.eql(400);
    
            });
            it('Should not create a new user:invalid email',async()=>{
                const resp = await request(`${config.host}/api/v1/user`, {
                    method: 'POST',
                    body: JSON.stringify(cases.case_03.input),
                    headers: {'Content-Type': 'application/json'},
                  });
                  resp.should.be.an.object();
            resp.should.have.porperty('status');
            resp.status.should.be.equal(400);

            const respjson=await resp.json();
            respjson.should.be.an.Object();
            respjson.should.have.property('error');
            respjson.error.should.be.an.Object();
            respjson.error.should.have.property('email');
            respjson.error.name.should.be.eql('BadRequestError');
            respjson.error.should.have.property('statusCode');
            respjson.error.statusCode.should.be.eql(400);
        
                });
                it('should not create new user:invalid password',async()=>{
                    const resp = await request(`${config.host}/api/v1/user`,{
                        method:'POST',
                        body:JSON.stringify(cases.case_04.input),
                        Headers:{'Content-Type':'application/json'},
                    });
                    resp.should.be.an.object();
            resp.should.have.porperty('status');
            resp.status.should.be.equal(400);

            const respjson=await resp.json();
            respjson.should.be.an.Object();
            respjson.should.have.property('error');
            respjson.error.should.be.an.Object();
            respjson.error.should.have.property('password');
            respjson.error.name.should.be.eql('BadRequestError');
            respjson.error.should.have.property('statusCode');
            respjson.error.statusCode.should.be.eql(400);
                });
});