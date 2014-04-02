
module.exports = function(deep,o1,o2,etc){
  deep = arguments[0] === true;
  var o1 = arguments[deep?1:0];
  if (!(o1 instanceof Object))
    o1 = {};
  for (var i=deep?2:1;i<arguments.length;++i) {
    var o2 = arguments[i];
    if (!(o2 instanceof Object))
      continue;
    Object.keys(o2).forEach(function(k){
      if (deep)
        o1[k] = o2[k] instanceof Object ? ext(true,o1[k],o2[k]) : o2[k];
      else
        o1[k] = o2[k];
    });
  }
  return o1;
}
