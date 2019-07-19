'use strict';

const {defineSupportCode} = require('cucumber');
const rp = require('request-promise');

defineSupportCode(function({After,Before}){   
    After(function(scenario){
        console.defaultError = console.error.bind(console);
        console.errors = [];
        console.error = function(){    
           console.defaultError.apply(console, arguments);    
           console.errors.push(Array.from(arguments));
            if (console.errors.value !== null && console.errors.value.length > 0) {
                throw new Error('Javascript errors! ' + console.errors.value);
            }
        }
    });
});
