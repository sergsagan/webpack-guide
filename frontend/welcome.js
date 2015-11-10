/**
 * Created by martynuk on 05.11.15.
 */
'use strict';

export  default function(message){

	if (NODE_ENV == 'development'){
		console.log(message);
	}

	alert('Welcome ${message}');
};