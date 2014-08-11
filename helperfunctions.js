Handlebars.registerHelper('ifLastObj', function (indexVal, objArray, options) {
    /* This is to resolve the issue where Handlebars will not provide a method to know
       when you've reached the last item in an object.  They only do so for Array's with @last.
       Both Array and Objects can use @first though
       
       This now supports IE8 as IE8 cannot use ES5 .keys
    */

    var fn = options.fn, inverse = options.inverse;
//
    if (Object.keys) {
        if (indexVal == (Object.keys(objArray).length - 1)) {
            return fn(this);
        } else {
            return inverse(this);
        }
    } else {
        var objArrayLength = 0;
        $.each(objArray, function () {
            objArrayLength++;
        });

        if ((objArrayLength - 1) > indexVal) {
            return inverse(this);
        } else {
            objArrayLength = 0;
            return fn(this);
        }
    }

});