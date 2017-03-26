;(function(){

    function cloneOwn() {

        var arg = Array.prototype.slice.call(arguments);

        var target, refult = arg.shift() || {};
        
        while(target = arg.shift(), typeof target === 'object'){

            for(var i in target)
                target.hasOwnProperty(i) && (refult[i] = target[i]);

        }
        
        return refult;

    }

    function setPrototypeOf (obj, proto) {

        obj.__proto__ = proto;

        return obj;

    }

    Function.prototype._new = function() {

        var obj = cloneOwn({}, this._initial);
        
        setPrototypeOf(obj, this.prototype);

        var result = this.apply(obj, arguments);
        
        return typeof result === 'object' ? result : obj;

    }

    
    Function.prototype._extend = function() {

        var arg = Array.prototype.slice.call(arguments);

        this._initial = {};
                
        var p = arg.shift();

        if ( typeof p === 'function' ){

            cloneOwn(this._initial, p._initial);

            p.apply(this._initial, arg);
            
            setPrototypeOf(this, p);

            //this.prototype = cloneOwn(Object.create(p.prototype, {constructor:{value: this}}), this.prototype);
            setPrototypeOf(this.prototype, p.prototype);

        }
        
        return this;

    }

})();