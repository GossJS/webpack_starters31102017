import name from './2';
const mixin = function(){return this*this};
console.log(name);
//Function.prototype.bind = function(){return ()=>'hahaha'};

console.log( 5::mixin() );
