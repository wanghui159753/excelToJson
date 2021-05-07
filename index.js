var reader = require('node-xlsx'), fs = require('fs');
var list = reader.parse('test.xlsx');
var ar = [];
var index;
(function (index) {
    index[index["index"] = 0] = "index";
    index[index["name"] = 1] = "name";
    index[index["type"] = 2] = "type";
    index[index["carea"] = 3] = "carea";
    index[index["area"] = 4] = "area";
    index[index["address"] = 5] = "address";
    index[index["lnglat"] = 6] = "lnglat";
})(index || (index = {}));
list[0].data.forEach(function (v) {
    console.log(v[0]);
    if (Number(v[0])) {
        set_obj(v);
    }
});
function set_obj(v) {
    if (v === void 0) { v = []; }
    var obj = new Object();
    v.forEach(function (a, i) {
        obj[index[i]] = a || '';
    });
    ar.push(obj);
}
fs.writeFileSync('use.js', 'let abc=' + JSON.stringify(ar));
