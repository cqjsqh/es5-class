;(function(){

    Function.prototype._new = function(){

        var obj = {};
        
        if ( this._initial )
        for ( var i in this._initial )
            this._initial.hasOwnProperty(i) && ( obj[i] = this._initial[i] );
        
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