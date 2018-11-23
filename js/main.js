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
    }
    // Preventing form submission.
    e.preventDefault();
}