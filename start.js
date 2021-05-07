const child=require('child_process').exec;
child('tsc index',function (e){

    console.log(e);
    child('node index')
})