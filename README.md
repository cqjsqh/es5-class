# es5-class
es5 生成class，支持构造传参、继承、函数复用、多继承； --完美

-----------------------------------

调用方法：
```
function B (name) { this._b = name;}
function C (name) { this._c = name;}
function A (name) { this._a = name;}
A.prototype.say = function(){ console.log(this._a); };

// 调用_extend继承B
A._extend(B, 'b');

// 继承C,调用_new生成实例a
var a = A._extend(C, 'c')._new('a');

console.log( a instanceof A ); 	// true
console.log( a instanceof B ); 	// true
console.log( a instanceof C );	// true
console.log( a );				// {_b: "b", _c: "c", _a: "a"}
a.say();              			// a
```
