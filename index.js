
module.exports = sext;

function sext(/*deep,o1,o2,etc*/){
  var deep = arguments[0] === true
    ,o1 = arguments[deep?1:0],o2,i
  if (!(o1 instanceof Object))
    o1 = {}
  for (i=deep?2:1;i<arguments.length;++i) {
    o2 = arguments[i]
    if (!(o2 instanceof Object))
      continue
    Object.keys(o2).forEach(function(k){
      o1[k] = deep && o2[k] instanceof Object ? sext(true,o1[k],o2[k]) : o2[k]
    })
  }
  return o1
}
