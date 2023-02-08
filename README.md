# AS Google TTS
![GitHub](https://img.shields.io/github/license/andressousa/as-qliksense-googletts) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/andressousa/as-qliksense-googletts) ![GitHub issues](https://img.shields.io/github/issues/andressousa/as-qliksense-googletts)

AS Google TTS is a visualization extension for Qlik Sense that converts some text snippets into audio for ease of use for accessibility by people with low vision.

![](https://raw.githubusercontent.com/andressousa/as-qliksense-googletts/main/as-qliksense-googletts/preview.png)

## Instructions

                
1. Download the [lastest release](https://github.com/andressousa/as-qliksense-googletts/releases/latest);
2. Install extension following [Qlik Help](https://help.qlik.com/en-US/sense-developer/November2022/Subsystems/Extensions/Content/Sense_Extensions/Howtos/deploy-extensions.htm) instructions;
3. Open the App;
4. Go to Custom objects into [Assets panel](https://help.qlik.com/en-US/sense/November2022/Subsystems/Hub/Content/Sense_Hub/Assets/assets-panel.htm);
5. Open Extensions tab, then drag & drop extension to the sheet;
6. Configure all available [Google TTS parameters](https://cloud.google.com/text-to-speech/docs/reference/rest/v1/text/synthesize);
7. Enable propagate option to read Title, Subtitle and Footnote of all sheet objects;
8. Optionally insert a measure with a text; 
9. That's all.

## Important

You will need to request an API Key from [Google Cloud Plataform](https://cloud.google.com/text-to-speech?hl=pt-br).
