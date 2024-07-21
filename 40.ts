//Task 40

interface Album{
    artist: string,
    title: string,
    tracks?: number
}
function makeAlbum(
        artistName: string,
        titleName: string,
        numTrack?: number
) : Album {
    const album :Album = {
        artist: artistName,
        title: titleName,
    };
    if(numTrack !== undefined){
        album.tracks = numTrack
    }
    return album;
}
const album1 : Album = makeAlbum("Artist1", "Album1");
const album2 : Album = makeAlbum("Artist2", "Album3", 12);
const album3 : Album = makeAlbum("Artist3", "Album2", 4);

console.log(album1);
console.log(album2);
console.log(album3);