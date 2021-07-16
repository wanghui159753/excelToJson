var reader = require('node-xlsx'), fs = require('fs');
var list = reader.parse('test.xlsx');
var ar = [];
var index;
(function (index) {
    index[index["index"] = 0] = "index";
    index[index["area"] = 1] = "area";
    index[index["name"] = 2] = "name";
    index[index["lng"] = 3] = "lng";
    index[index["lat"] = 4] = "lat";
    index[index["address"] = 5] = "address";
    index[index["fast"] = 6] = "fast";
    index[index["slow"] = 7] = "slow";
    index[index["fast_d"] = 8] = "fast_d";
    index[index["slow_d"] = 9] = "slow_d";
    index[index["total"] = 10] = "total";
    index[index["time"] = 11] = "time";
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
        obj[index[i]] = a;
    });
    ar.push(obj);
}
fs.writeFileSync('use.js', 'let abc=' + JSON.stringify(ar));
