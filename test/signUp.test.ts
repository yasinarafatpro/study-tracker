
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
          console.log(resp);
          console.log(typeof resp);

        });

        it('Should not create a new user',async()=>{
            const resp = await request(`${config.host}/api/v1/user`, {
                method: 'POST',
                body: JSON.stringify(cases.case_02.input),
                headers: {'Content-Type': 'application/json'},
              });
              console.log(resp);
              console.log(typeof resp);
    
            });
        
});