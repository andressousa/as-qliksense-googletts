/*!
*
* The MIT License (MIT)
* Copyright (c) 2023
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
* @version v1.0.0
* @link https://github.com/andressousa/as-qliksense-googletts
* @author André Sousa
* @license MIT
*/

define([
	 'qlik'
	,'jquery'
	,'./googletts-api'
	,'./definition'
	,'./support'
	,'./initial'
	,'css!./style.css'
],
function( 
	 qlik
	,$
	,api
	,definition
	,support
	,initial
){
    'use strict';

    return {
		initialProperties: initial,
		definition: definition,
		support: support,

		//on show trigger
		paint: function ($element, layout) {
		
			var text;

			//clear html
			$element.empty();

			//remove unused player
			$('body').find('#googleTTSPlayer').remove();

			//load new player
			$('body').append('<audio id="googleTTSPlayer" autobuffer="autobuffer" autoplay="autoplay"><source src=""/></audio>');

        	//test if API key exists, then load library
    		if( '' == layout.apiKey ){
				$element.append('<div qv-extension><p>Invalid API Key</p></div>');
				return;
	    	}else{

	    		setTimeout( () => {
				    loadAPIClient( layout.apiKey );
	    		
					$element.append('<div qv-extension><p id="googleTTSText"></p><button type="button" class="lui-button googleTTSButton"><span class="lui-icon lui-icon--play"></span></button></div>');

			    	//propagate player to all objects
					if( 'Y' == layout.propagatePlayer && '' !== layout.apiKey ){
						$('body').find('.qv-object').each(function(){
						    var t = '', s = '', f = '', text = '', btn = '';

						    //get title, subtitle and footer texts
						    t = $(this).find('.qv-object-title-text').text();
						    s = $(this).find('.qv-object-subtitle').text();
						    f = $(this).find('.qv-object-footnote').text();

						    //concatenate texts
						    if( t != '' ) text += t + '. ';
						    if( s != '' ) text += s + '. ';
						    if( f != '' ) text += f + '.';
						    
						    //text if have some text, then create button
						    if( text != '' ){
						    	$(this).closest('.object-wrapper').find('.google-tts-play').remove();
						    	$(this).closest('.object-wrapper').find('.qv-object-nav').append('<button class="ng-scope ng-isolate-scope lui-icon lui-icon--play border white google-tts-play" title="Play" aria-hidden="false"></button>');
						    }
						});

						//player trigger
						$('body').on('click', '.google-tts-play', function(e){
							e.stopImmediatePropagation();
						    var t = '', s = '', f = '', text = '', btn = '';
						    t = $(this).closest('.object-wrapper').find('.qv-object-title-text').text();
						    s = $(this).closest('.object-wrapper').find('.qv-object-subtitle').text();
						    f = $(this).closest('.object-wrapper').find('.qv-object-footnote').text();
						    if( t != '' ) text += t + '. ';
						    if( s != '' ) text += s + '. ';
						    if( f != '' ) text += f + '.';
						    text != '' ? autoPlay( layout, text ) : false;
						});
					}
				}, 500);
	 			
		    	//show/hide main text
				if( 'N' == layout.showText ){
					$('body').find('#googleTTSText').hide();
				}else{
					$('body').find('#googleTTSText').show();
				}

				//set main text
		    	$('body').find('#googleTTSText').text( layout.qHyperCube.qDataPages[0].qMatrix[0][0].qText );

				//main player
				$element.find('.googleTTSButton').on('click', function(){
					if( '' !== layout.apiKey ){
						text = $element.find('#googleTTSText').text();
						autoPlay( layout, text );
					}
				});
			}

			return qlik.Promise.resolve();
        }
    }
});