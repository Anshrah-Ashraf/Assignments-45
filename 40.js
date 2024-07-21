//Task 40
function makeAlbum(artistName, titleName, numTrack) {
    var album = {
        artist: artistName,
        title: titleName,
    };
    if (numTrack !== undefined) {
        album.tracks = numTrack;
    }
    return album;
}
var album1 = makeAlbum("Artist1", "Album1");
var album2 = makeAlbum("Artist2", "Album3", 12);
var album3 = makeAlbum("Artist3", "Album2", 4);
console.log(album1);
console.log(album2);
console.log(album3);
