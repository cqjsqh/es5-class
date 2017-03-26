;(function(){

    function cloneOwn(){

        var arg = Array.prototype.slice.call(arguments);

        var target, refult = arg.shift() || {};
        
        while(target = arg.shift(), typeof target === 'object'){

            for(var i in target)
                target.hasOwnProperty(i) && (refult[i] = target[i]);

        }
        
        return refult;

    }

    Function.prototype._new = function(){

        var obj = cloneOwn({}, this._initial);
        
        obj.__proto__ =  this.prototype;

        var result = this.apply(obj, arguments);
        
        return typeof result === 'object' ? result : obj;

    }

    
    Function.prototype._extend = function(){

        var arg = Array.prototype.slice.call(arguments);

        this._initial = this._initial || {};
                
        var p = arg.shift();

        if ( typeof p === 'function' && !(this.prototype instanceof p) ){

            p.apply(this._initial, arg);
            
            p.prototype.__proto__ = this.prototype.__proto__;

            this.prototype.__proto__ = p.prototype;

        }
        
        return this;

    }

})();