var test = require('tape')
,sext = require('../')
,undef

test('can worky',function(t){
  var sub = {
    a: {
      a: 1
    }
  }
  var o1 = {
    a: sub
    ,b: 'sup'
  }
  var o2 = {
    a: {
      a: 2
    }
    ,b: 'chums'
  }
  var o3 = {
    a: {
      b: 3
    }
  }

  var r = sext(true,{},o1,null,o2,o3)
  t.equal(r.a.a, 2,'deep worky')
  t.equal(r.a.b, 3, 'deep worky')
  t.equal(sub.a.a, 1, 'deep worky')
  t.equal(sub.b, undef, 'deep worky')
  t.equal(o1.b, 'sup', 'deep worky')

  r = sext({},o1,o2,o3,false)
  t.equal(r.a.a, undef, 'shallow worky')
  t.equal(r.a.b, 3, 'shallow worky')
  t.equal(sub.a.b, undef, 'shallow worky')

  sext(o1,o2,o3)
  t.equal(o1.b, 'chums', 'non clobbery')

  t.end()

})
