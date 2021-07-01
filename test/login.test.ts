require('should')
const requestlogin=require('node-fetch');
const configLogin=require('./config')
const casesLogin=require('./cases/login')

describe('Login Test',function(){
    this.timeout(10000);

    before(function(){
        require('../index');
    });
    // after(function(){

    // });
    it('should login for this user',async()=>{
        const resp=await requestlogin(`${configLogin.host}/api/v1/user/login`,{
            method:'POST',
            body:JSON.stringify(casesLogin.case_01.input),
            headers: {'Content-Type': 'application/json'},
        });
        console.log(resp);
        console.log(typeof resp);
    });

});
