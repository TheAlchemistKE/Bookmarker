// Creating a listener for the button.
document.getElementById("input").addEventListener("submit", saveBookmark);

function saveBookmark(e){
    // Getting form inputs.
    var siteName = document.getElementById("site-name").value;
    var siteUrl= document.getElementById("site-url").value;
   
    var bookmarks = {
        site_name:siteName,
        site_url:siteUrl
    }

    console.log(bookmarks);
    // Preventing form submission.
    e.preventDefault();
}