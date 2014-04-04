
[![Build Status](https://secure.travis-ci.org/fluffybunnies/sext.png)](http://travis-ci.org/fluffybunnies/sext)

## Description

Simple extend (sext) emulates jQuery's $.extend

Optional deep extend. Silently ignores non Objects.

```
sext( [deep,] target [,obj1 [,objN]] )
```

## Sextamples

```
// copy
var sext = require('sext')

var pirateOg = {name: 'Pompeius'}
var pirateNb = sext({}, pirateOg)
```

```
// extend
var sext = require('sext')

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
waiter.giveMeWine()
```