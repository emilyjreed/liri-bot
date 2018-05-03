# LIRI-BOT

LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

### First Steps:

* git clone 'https://github.com/emilyjreed/liri-bot.git'
* cd liri-bot
* run <$ npm install> in command line

### Second Steps:

* Create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:

'''

**Spotify API keys**

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

**Twitter API keys**

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

'''


### LIRI takes in the following commands:

**<$ node liri.js my-tweets>** This pulls my top 20 tweets from Twitter.

**<$ node liri.js spotify-this-song "song title here">** This pulls the Artist, Song Title, 
Album Name, and Spotify link for song entered.

**<$ node liri.js movie-this "movie title here">** This pulls Title, Year, Rating, Country, Language, Plot, and Actors of movie entered.

**<$ node liri.js do-what-it-says>** This take whatever command is in the random.txt file and returns the specified data.

All data is stored in the log.txt file.
