$(document).ready(async ()=>{
    const apiURL = 'https://jsonplaceholder.typicode.com/albums';
    function fetchAlbums(URL){
        return fetch(URL).then((response)=>(response.json()));
    }
    function byIdAsc(album1, album2){
        if(album1.id > album2.id){
            return 1;
        }
        if(album1.id < album2.id){
            return -1;
        }
        return 0;
    }

    let albums = await fetchAlbums(apiURL);
    albums = albums.sort(byIdAsc);
    albums = albums.reverse();
    let mostRecentAlbums = [albums[0],albums[1], albums[2]];
    mostRecentAlbums.forEach((album)=>{
        let html = `
        <li class="album">
                <a href="/album.html?albumId={id}">{title}</a>
         </li>
        `;
        html = html.replace('{title}', album.title);
        html = html.replace('{id}', album.id);
        $('#albums-container').append(html);
    });


});
