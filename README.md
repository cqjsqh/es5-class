# es5-class
es5 模拟class，支持构造传参、继承、多继承； --简单完美（原生构造函数不支持继承，如Array）
-----------------------------------
es5构造方法：
```
function B (name) { this._b = name;}
function C (name) { this._c = name;}

function A (name) { this._a = name;}
A.prototype.say = function(){ console.log(this._a); };
```

引入es5-class.js后,实现继承：
```
// 调用_extend继承B
B._extend(C, 'c');
A._extend(B, 'b');

// 调用_new生成实例a
var a = A._new('a');

console.log( a instanceof A ); 	// true
console.log( a instanceof B ); 	// true
console.log( a instanceof C );	// true
console.log( a );               // {_b: "b", _c: "c", _a: "a"}
a.say();                        // a
console.log( A.__proto__ )      // B
```
