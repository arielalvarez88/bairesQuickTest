$(document).ready(async ()=>{

    function byIdAsc(album1, album2){
        if(album1.id > album2.id){
            return 1;
        }
        if(album1.id < album2.id){
            return -1;
        }
        return 0;
    }
    const photosAPIURL = 'https://jsonplaceholder.typicode.com/photos?albumId={albumId}';
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('albumId');
    let photos = await fetch(photosAPIURL.replace('{albumId}',albumId)).then((response)=>(response.json()));
    photos = photos.sort(byIdAsc);
    photos = photos.reverse();
    const mostRecentPhotos = [photos[0],photos[1]];
    mostRecentPhotos.forEach((song)=>{
        let html = `
        <li class="song">
               {title}
         </li>
        `;
        html = html.replace('{title}', song.title);
        html = html.replace('{id}', song.id);
        $('#songs-container').append(html);
    });
    if(mostRecentPhotos.length <= 0){
        $('#songs-container').append('This album has no songs');
    }


});
