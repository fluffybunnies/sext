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
  t.equal(o1.b, 'sup', 'non clobbery')

  sext(o1,o2,o3)
  t.equal(o1.b, 'chums', 'no copy')

  t.end()

})

test('funcs cool 2',function(t){
  var f1 = new Function
  f1.prototype.giveMeCheese = function(){
    return 'brie'
  }

  var f2 = new Function
  f2.prototype.giveMeWine = function(){
    return 'zin'
  }

  sext(f1.prototype,f2.prototype)
  var waiter = new f1()

  t.ok(f1.prototype.giveMeWine instanceof Function, 'func in da house')
  t.equal(waiter.giveMeWine(), 'zin', 'func in da house')

  t.end();
})
