const reader=require('node-xlsx'),fs=require('fs');
var list=reader.parse('test.xlsx');
let ar=[];
enum index{
    index,
    name,
    type,
    carea,
    area,
    address,
    lnglat
}
list[0].data.forEach(v=>{
    console.log(v[0])
    if(Number(v[0])){
        set_obj(v)
    }
})
function set_obj(v:[]=[]){
    let obj=new Object()
    v.forEach((a,i)=>{

        obj[index[i]]=a||'';
    })
    ar.push(obj)
}
fs.writeFileSync('use.js','let abc='+JSON.stringify(ar))