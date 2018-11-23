// Creating a listener for the button.
document.getElementById("input").addEventListener("submit", saveBookmark);

function saveBookmark(e){
    // Getting form inputs.
    var siteName = document.getElementById("site-name").value;
    var siteUrl= document.getElementById("site-url").value;
   
    var bookmark = {
        site_name:siteName,
        site_url:siteUrl
    }

    if (localStorage.getItem('bookmarks') === null){
        // Declaring an empty array.
        var bookmarks = [];

        // Adding inputted bookmark to the bookarks array.
        bookmarks.push(bookmark);

        // Setting to Local Storage and converting array into string.
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }else {
        // Getting Bookmarks that already exists and converting it into JSON.
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        // Adding bookmark to array.
        bookmarks.push(bookmark);

        // Resetting Local Storage.
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }
    // Preventing form submission.
    e.preventDefault();
}
function fetchBookmark(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
    // Fetching Output ID.
    var bookmarkResult = document.getElementById('bookmarks');
    bookmarkResult.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++){
        var site_name = bookmarks[i].site_name;
        var site_url = bookmarks[i].site_url;
        
        bookmarkResult.innerHTML += '<div class="well well-lg">'+
                                    '<h4>'+site_name+'</h4>'+
                                    '<a class="btn btn-primary" target="_blank" href="'+site_url+'">Visit</a>'+
                                    '<a onclick="deleteBookmark(\''+site_url+'\')" class="btn btn-danger" href="#">Delete</a>'+
                                    '</div>';
    }
}