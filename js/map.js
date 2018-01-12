// JavaScript Document
/*!
 * Forerunner v004
 * by Enoch Daniel Adams
 *
 * More info:
 * sites.google.com/view/reactive-inc/home
 *
 * Copyright 2017 ReActive Inc.
 * Released under the MIT license
 * 
 *
 * @Reactive_Inc.
 */
$(document).ready(function() {
	
	
	//start highlight function	
	$('#active').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-000101').css('fill', c);
	});
	$('#active01').change(function(){
		var c = this.checked ? '#f00' : '#3970AB';
    	$('#path-001100').css('fill', c);
	});
	$('#active02').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-001000_1_').css('fill', c);
	});
	$('#active03').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-000800_1_').css('fill', c);
	});
	$('#active04').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-001601_1_').css('fill', c);
	});
	$('#active05').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-0020-1').css('fill', c);
	});
	$('#active06').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-000400_1_').css('fill', c);
	});
	$('#active07').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-001501').css('fill', c);
	});
	$('#active08').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-0023-1').css('fill', c);
	});
	//end highlight function
	$('#complete').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-000101').css('fill', c);
	});	
	$('#complete01').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-001100').css('fill', c);
	});
	$('#complete02').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-001000_1_').css('fill', c);
	});
	$('#complete03').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-000800_1_').css('fill', c);
	});
	$('#complete04').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-001601_1_').css('fill', c);
	});
	$('#complete05').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-0020-1').css('fill', c);
	});
	$('#complete06').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-000400_1_').css('fill', c);
	});
	$('#complete07').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-001501').css('fill', c);
	});
	$('#complete08').change(function(){
		var c = this.checked ? '#f00' : '#75528B';
    	$('#path-0023-1').css('fill', c);
	});		
}); //end document ready
