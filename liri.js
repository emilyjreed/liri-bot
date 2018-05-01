require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');

var keys = require('./keys');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var params = process.argv.slice(2);

function myTweets() {
    client.get('statuses/user_timeline', params, searchedData);
};

function searchedData(err, data, response) {
    for (var i of data) {
        console.log(i.created_at + "\n");
        console.log(i.text + "\n\n----------------\n");

    }
};

function spotifyIt(music) {
    spotify.search({ type: 'track', query: music }, function (err, data) {
        if (err) {
            console.log('Error occured: ' + err);
            return;
        }
        else {
            var songInfo = data.tracks.items[0];
            console.log(songInfo.artists[0].name);
            console.log(songInfo.name);
            console.log(songInfo.album.name);
            console.log(songInfo.external_urls.spotify);
        }
    })
};

function movieThis(movie) {
    request.get({ url: 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=532c2fd9' }, function (err, response, body) {
        if (err) {
            console.log('Error occured: ' + err);
            return;
        }
        else {
            console.log(JSON.parse(body).Title);
            console.log(JSON.parse(body).Year);
            console.log(JSON.parse(body).Ratings[0].Source + ': ' + JSON.parse(body).Ratings[0].Value);
            console.log(JSON.parse(body).Ratings[1].Source + ': ' + JSON.parse(body).Ratings[1].Value);
            console.log(JSON.parse(body).Country);
            console.log(JSON.parse(body).Language);
            console.log(JSON.parse(body).Plot);
            console.log(JSON.parse(body).Actors);
        }
    }
    )
};

function doIt() {
    fs.readFile('random.txt', 'utf8', function (err, data) {
        if (err) throw err;
        var fileContents = data.split("\n");
        for (var i of fileContents) {
            var line = i.split(",");
            if (line[0] === 'do-what-it-says') {
                console.log('You have just f**ked up')
                process.exit(1);
            }
            mainSwitch(line);
        }
    });
}

function mainSwitch(parameters) {
    switch (parameters[0]) {
        case "my-tweets":
            myTweets();
            break;

        case "spotify-this-song":
            if (parameters[1]) {
                spotifyIt(parameters[1]);
            }
            else {
                spotifyIt("What's my age again");
            }
            break;

        case "movie-this":
            if (parameters[1]) {
                movieThis(parameters[1]);
            }
            else {
                movieThis("Mr Nobody");
            }
            break;

        case "do-what-it-says":
            doIt();
            break;

    }
};

mainSwitch(params);




