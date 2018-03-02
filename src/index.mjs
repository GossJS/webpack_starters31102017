import mixin from './mixin';
console.log('Should return 5 * 5 === 25');
//Function.prototype.bind = function(){return ()=>'hahaha'};

console.log( 5::mixin() );
