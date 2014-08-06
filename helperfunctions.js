Handlebars.registerHelper('ifLastObj', function (v1, v2, options) {
    /* This is to resolve the issue where Handlebars will not provide a method to know
       when you've reached the last item in an object.  They only do so for Array's with @last.
       Both Array and Objects can use @first though
    */

    var fn = options.fn, inverse = options.inverse;

    if (v1 == (Object.keys(v2).length - 1)) {
        return fn(this);
    } else {
        return inverse(this);
    }

});