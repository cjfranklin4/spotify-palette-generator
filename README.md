# Spotify Palette Generator

This will be a web app that generates a 5 color palette based on your current Top 5 songs on Spotify.

## How are the colors generated from my Spotify songs?
[Spotify's Audio Features](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-features) feature gives unique data on each song based on its tempo, mode, beat strength and more. This app uses the HSB color model to determine how the colors are generated. The main 3 used to determine the *Hue* of a song's color are:
- Danceabiltiy
- Valence
- Energy

The song's *tempo* is used to determine its *Saturatation*, and the song's *mode* is used to determine the its *Brightness*. 