// Creating a listener for the button.
document.getElementById("input").addEventListener("submit", saveBookmark);

function saveBookmark(e){
    // Getting form inputs.
    var siteName = document.getElementById("site-name").value;
    var siteUrl= document.getElementById("site-url").value;

    if (!validateForm(siteName, siteUrl)){
        return false;
    }
    
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
    document.getElementById('input').reset();
    // Fetching Bookmarks after addition...
    fetchBookmark();

    // Preventing form submission.
    e.preventDefault();
}
function deleteBookmark(site_url){
    // Fetching Bookmarks and checking them to see if they match the url.
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for(var b = 0; b < bookmarks.length; b++){
        if(bookmarks[b].site_url == site_url){
            
            // Removing the item.
            bookmarks.splice(b, 1);
        }

    }
    // Resetting Local Storage.
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    
    // Fetching Bookmarks after deletion...
    fetchBookmark();


}
function fetchBookmark(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
    // Fetching Output ID.
    var bookmarkResult = document.getElementById('bookmarks');
    bookmarkResult.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++){
        var site_name = bookmarks[i].site_name;
        var site_url = bookmarks[i].site_url;
        
        bookmarkResult.innerHTML += '<div class="well">'+
                                    '<h4 class="custom-heading">'+site_name+'</h4>'+
                                    '<a class="btn btn-primary" target="_blank" href="'+site_url+'">Visit</a>'+
                                    '<a onclick="deleteBookmark(\''+site_url+'\')" class="btn btn-danger" href="#">Delete</a>'+
                                    '</div>';
    }
}
function validateForm(siteName, siteUrl){
    if(!siteName || !siteUrl){
        alert('Please fill in the fields!');
        return false;

    }
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteUrl.match(regex)){
        alert('Make sure your url starts with HTTPs');
        return false;
    }
    return true;
}