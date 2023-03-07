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
* @link https://github.com/andressousa/as-qliksense-googletts
* @author André Sousa
* @license MIT
*/

define([], 
function () {
    'use strict';

	/** 
	 *	Google TTS Api Options
	 *	@see https://cloud.google.com/text-to-speech/docs/reference/rest/v1/text/synthesize
	 */

	// API key
	var apiKey = {
		type: 		"string",
		label: 		"Api Key",
		ref: 		"apiKey",
		defaultValue: 	""
	};

	// Audio Encoding
 	var audioEncoding = {
		type: 			"string",
		component: 		"dropdown",
		label: 			"Audio Encoding",
		ref: 			"audioEncoding",
		defaultValue: 	"LINEAR16",
		options:[
			 {value: "LINEAR16", label: "LINEAR16"}
			,{value: "OGG_OPUS", label: "OGG_OPUS"}
			,{value: "MULAW", label: "MULAW"}
			,{value: "ALAW", label: "ALAW"}
		]		
	};
	
	// Pitch
 	var pitch = {
		type: 			"string",
		component: 		"dropdown",
		label: 			"Pitch",
		ref: 			"pitch",
		defaultValue: 	"1",
		options:[
			 {value: "0", label: "0"}
			,{value: "1", label: "1"}
			,{value: "2", label: "2"}
			,{value: "3", label: "3"}
			,{value: "4", label: "4"}
			,{value: "5", label: "5"}
			,{value: "6", label: "6"}
			,{value: "7", label: "7"}
			,{value: "8", label: "8"}
			,{value: "9", label: "9"}
			,{value: "10", label: "10"}
		]		
	};
	
	// Speaking Rate
 	var speakingRate = {
		type: 			"string",
		component: 		"dropdown",
		label: 			"Speaking Rate",
		ref: 			"speakingRate",
		defaultValue: 	"0",
		options:[
			 {value: "0", label: "0"}
			,{value: "0.25", label: "0.25"}
			,{value: "0.5", label: "0.5"}
			,{value: "0.75", label: "0.75"}
			,{value: "1", label: "1"}
			,{value: "1.25", label: "1.25"}
			,{value: "1.5", label: "1.5"}
			,{value: "1.75", label: "1.75"}
			,{value: "2", label: "2"}
		]		
	};
	
	// Volume Gain Db
 	var volumeGainDb = {
		type: 			"string",
		component: 		"dropdown",
		label: 			"Volume Gain Db",
		ref: 			"volumeGainDb",
		defaultValue: 	"0",
		options:[
			 {value: "0", label: "0"}
			,{value: "1", label: "1"}
			,{value: "2", label: "2"}
			,{value: "3", label: "3"}
			,{value: "4", label: "4"}
			,{value: "5", label: "5"}
			,{value: "6", label: "6"}
			,{value: "7", label: "7"}
			,{value: "8", label: "8"}
			,{value: "9", label: "9"}
			,{value: "10", label: "10"}
			,{value: "11", label: "11"}
			,{value: "12", label: "12"}
			,{value: "13", label: "13"}
			,{value: "14", label: "14"}
			,{value: "15", label: "15"}
			,{value: "16", label: "16"}
		]		
	};
	
	// Language
	// @see https://cloud.google.com/text-to-speech/docs/voices
 	var languageCode = {
		type: 			"string",
		component: 		"dropdown",
		label: 			"Language",
		ref: 			"languageCode",
		defaultValue: 	"en",
		options:[
			,{value: 'af-ZA', label: 'Afrikaans (South Africa)'}
			,{value: 'ar-XA', label: 'Arabic'}
			,{value: 'bn-IN', label: 'Bengali (India)'}
			,{value: 'bg-BG', label: 'Bulgarian (Bulgaria)'}
			,{value: 'ca-ES', label: 'Catalan (Spain)'}
			,{value: 'yue-HK', label: 'Chinese (Hong Kong)'}
			,{value: 'cs-CZ', label: 'Czech (Czech Republic)'}
			,{value: 'da-DK', label: 'Danish (Denmark)'}
			,{value: 'nl-BE', label: 'Dutch (Belgium)'}
			,{value: 'nl-NL', label: 'Dutch (Netherlands)'}
			,{value: 'en', label: 'English'}
			,{value: 'en-AU', label: 'English (Australia)'}
			,{value: 'en-IN', label: 'English (India)'}
			,{value: 'en-GB', label: 'English (UK)'}
			,{value: 'en-US', label: 'English (US)'}
			,{value: 'fil-PH', label: 'Filipino (Philippines)'}
			,{value: 'fi-FI', label: 'Finnish (Finland)'}
			,{value: 'fr-CA', label: 'French (Canada)'}
			,{value: 'fr-FR', label: 'French (France)'}
			,{value: 'de-DE', label: 'German (Germany)'}
			,{value: 'el-GR', label: 'Greek (Greece)'}
			,{value: 'gu-IN', label: 'Gujarati (India)'}
			,{value: 'hi-IN', label: 'Hindi (India)'}
			,{value: 'hu-HU', label: 'Hungarian (Hungary)'}
			,{value: 'is-IS', label: 'Icelandic (Iceland)'}
			,{value: 'id-ID', label: 'Indonesian (Indonesia)'}
			,{value: 'it-IT', label: 'Italian (Italy)'}
			,{value: 'ja-JP', label: 'Japanese (Japan)'}
			,{value: 'kn-IN', label: 'Kannada (India)'}
			,{value: 'ko-KR', label: 'Korean (South Korea)'}
			,{value: 'lv-LV', label: 'Latvian (Latvia)'}
			,{value: 'ms-MY', label: 'Malay (Malaysia)'}
			,{value: 'ml-IN', label: 'Malayalam (India)'}
			,{value: 'cmn-CN', label: 'Mandarin Chinese'}
			,{value: 'cmn-TW', label: 'Mandarin Chinese'}
			,{value: 'nb-NO', label: 'Norwegian (Norway)'}
			,{value: 'pl-PL', label: 'Polish (Poland)'}
			,{value: 'pt-BR', label: 'Portuguese (Brazil)'}
			,{value: 'pt-PT', label: 'Portuguese (Portugal)'}
			,{value: 'pa-IN', label: 'Punjabi (India)'}
			,{value: 'ro-RO', label: 'Romanian (Romania)'}
			,{value: 'ru-RU', label: 'Russian (Russia)'}
			,{value: 'sr-RS', label: 'Serbian (Cyrillic)'}
			,{value: 'sk-SK', label: 'Slovak (Slovakia)'}
			,{value: 'es-ES', label: 'Spanish (Spain)'}
			,{value: 'es-US', label: 'Spanish (US)'}
			,{value: 'sv-SE', label: 'Swedish (Sweden)'}
			,{value: 'ta-IN', label: 'Tamil (India)'}
			,{value: 'te-IN', label: 'Telugu (India)'}
			,{value: 'th-TH', label: 'Thai (Thailand)'}
			,{value: 'tr-TR', label: 'Turkish (Turkey)'}
			,{value: 'uk-UA', label: 'Ukrainian (Ukraine)'}
			,{value: 'vi-VN', label: 'Vietnamese (Vietnam)'}
		]		
	};
	
	// Reported Usage
 	var reportedUsage = {
		type: 			"string",
		component: 		"dropdown",
		label: 			"Reported Usage",
		ref: 			"reportedUsage",
		defaultValue: 	"REALTIME",
		options:[
			 {value: "REALTIME", label: "REALTIME"}
			,{value: "OFFLINE", label: "OFFLINE"}
		]		
	};
	
	// Gender
 	var ssmlGender = {
		type: 			"string",
		component: 		"dropdown",
		label: 			"Gender",
		ref: 			"ssmlGender",
		defaultValue: 	"MALE",
		options:[
			 {value: "FEMALE", label: "FEMALE"}
			,{value: "MALE", label: "MALE"}
			,{value: "NEUTRAL", label: "NEUTRAL"}
		]		
	};
	
	// Effects Profile
	// @see https://cloud.google.com/text-to-speech/docs/audio-profiles
 	var effectsProfileId = {
		type: 			"string",
		component: 		"dropdown",
		label: 			"Effects Profile",
		ref: 			"effectsProfileId",
		defaultValue: 	"wearable-class-device",
		options:[
			 {value: "wearable-class-device", label: "Smart watches and other wearables, like Apple Watch, Wear OS watch"}
			,{value: "handset-class-device", label: "Smartphones, like Google Pixel, Samsung Galaxy, Apple iPhone"}
			,{value: "headphone-class-device", label: "Earbuds or headphones for audio playback, like Sennheiser headphones"}
			,{value: "small-bluetooth-speaker-class-device", label: "Small home speakers, like Google Home Mini"}
			,{value: "medium-bluetooth-speaker-class-device", label: "Smart home speakers, like Google Home"}
			,{value: "large-home-entertainment-class-device", label: "Home entertainment systems or smart TVs, like Google Home Max, LG TV"}
			,{value: "large-automotive-class-device	Car speakers"}
			,{value: "telephony-class-application", label: "Interactive Voice Response (IVR) systems"}
		]		
	};

	//show measure text to user
 	var showText = {
		type: 			"string",
		component: 		"dropdown",
		label: 			"Show Text",
		ref: 			"showText",
		defaultValue: 	"Y",
		options:[
			 {value: "Y", label: "YES"}
			,{value: "N", label: "NO"}
		]		
	};

	//propagate audio button to qlik objects
 	var propagatePlayer = {
		type: 			"string",
		component: 		"dropdown",
		label: 			"Propagate Player",
		ref: 			"propagatePlayer",
		defaultValue: 	"N",
		options:[
			 {value: "Y", label: "YES"}
			,{value: "N", label: "NO"}
		]		
	};

    return {
        type: "items",
        component: "accordion",
        items: { 
            measures: {
                uses: "measures",
                min: 0,
                max: 1
            },
			appearence: {
				uses: "settings"
			},
			settings: {
				type: "items",
				label: "Settings",
				items: {
					apiKey: apiKey, 
					audioEncoding: audioEncoding,
					pitch: pitch,
					speakingRate: speakingRate,
					volumeGainDb: volumeGainDb,
					languageCode: languageCode,
					reportedUsage: reportedUsage,
					ssmlGender: ssmlGender,
					effectsProfileId: effectsProfileId,
					showText: showText,
					propagatePlayer: propagatePlayer
				}
			}
        }
    };
});