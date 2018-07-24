# Weather-app
A nodejs App which takes user address and by the google Geocode API it converts address into Longitude and Latitude and by using forecast weather API it converts Longitutde and Latitude to the current weather forecast and display result.

# Library used:-

## yargs:- 
for taking command.
url - https://www.npmjs.com/package/yargs

## request :-
for http request
url - https://www.npmjs.com/package/request

## axios :-
for http request but in promise style
url:- https://www.npmjs.com/package/axios

# API Used :-

# 1. Google Maps Geocode API :-
It takes your address and convert into longitude and latitude and it has many more feature

# 2. Dark Sky API
It takes longitude and latitude and give the result as current weather situation.

## API Format - https://api.darksky.net/forecast/[key]/[latitude],[longitude]
