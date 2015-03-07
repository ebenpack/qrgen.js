var galois_field = require('./galois_field');
// var log = require('./log_table');
// var exp = require('./antilog_table');

var log = [];
var exp = [];
var x = 1;
exp[0] = 1;

for (var i=1; i<255;i++){
    x <<= 1;
    if (x & 0x100){
      x ^= 0x11d;
    }
    exp[i] = x
    log[x] = i
}
for (var i=255; i<512;i++){
   exp[i] = exp[i-255]
}
log[exp[255]] = 255



function scale(p,x){
    var r = []
    for (var i=0; i < p.length; i++){
        r.push( gf_mul(p[i], x) );
    }
    return r;
}

function add(p,q){
    var maxlen = Math.max(p.length,q.length);
    var r = [];
    for (var i = 0; i < maxlen; i++){
        r.push(0);
    }
    for (var i = 0; i < p.length; i++){
        r[i+r.length-p.length] = p[i];
    }
    for (var i = 0; i < q.length; i++){
        r[i+r.length-q.length] ^= q[i];
    }
    return r;
}

function mul(p, q){
    var len = p.length + q.length - 1;
    var r = [];
    for (var i = 0; i < len; i++){
        r[i] = 0;
    }
    for (var j = 0; j < q.length; j++){
        for (var i = 0; i < p.length; i++){
            r[i+j] ^= gf_mul(p[i], q[j]);
        }
    }
    return r;
}

function eval(p,x){
   var y = p[0]
   for (var i = 1; i < p.length; i++){
      y = gf_mul(y,x) ^ p[i];
   }
   return y
}

function gf_div(x,y){
   if (y===0){
      throw new Error('Zero Division');
   }
   if (x===0){
      return 0;
   }
   return exp[log[x] + 255 - log[y]]
}

function gf_mul(x,y){
   if (x===0 || y===0){
      return 0;
   }
   return exp[log[x] + log[y]]
}

function gen(nsym){
    var g = [1]
    for (var i = 0; i < nsym; i++){
        g = mul(g, [1, exp[i]])
    }
   return g
}

// def rs_encode_msg(msg_in, nsym):
//    gen = rs_generator_poly(nsym)
//    msg_out = [0] * (len(msg_in) + nsym)
//    for i in range(0, len(msg_in)):
//       msg_out[i] = msg_in[i]
//    for i in range(0, len(msg_in)):
//       coef = msg_out[i]
//       if coef != 0:
//          for j in range(0, len(gen)):
//             msg_out[i+j] ^= gf_mul(gen[j], coef)
//    for i in range(0, len(msg_in)):
//       msg_out[i] = msg_in[i]
//    return msg_out

var poly = {
    scale: scale,
    add: add,
    mul: mul,
    eval: eval,
    gen: gen,
    gf_mul: gf_mul
}

module.exports = poly;