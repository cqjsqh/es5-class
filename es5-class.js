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

        this._initial = {};
                
        var p = arg.shift();

        if ( typeof p === 'function' ){

            cloneOwn(this._initial, p._initial);

            p.apply(this._initial, arg);
            
            //this.prototype = cloneOwn(Object.create(p.prototype, {constructor:{value: this}}), this.prototype);
            this.prototype.__proto__ = p.prototype;

        }
        
        return this;

    }

})();