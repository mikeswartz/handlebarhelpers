handlebarhelpers
================

Helper functions for Handlebars

ifLastObj function:
This is to resolve the issue where Handlebars will not provide a method to know
       when you've reached the last item in an object.  They only do so for Array's with @last.
       Both Array and Objects can use @first though
       
       Example:
       {{#each arrayObj}}
          {{#ifLastObj @index ../arrayObj}}
              {{this}}
          {{else}}
              {{this}},
          {{/ifLastObj}}
      {{/each}}
