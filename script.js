//In this activity, you will work with a group to build an application that searches and displays results from the Library of Congress API.
             

//## Instructions

//The completed application should meet the following criteria:

//* As a user, I can submit a search query from the application to request data and receive a response from the Library of Congress.
 
//Library of Congress API documentation on requests](https://www.loc.gov/apis/json-and-yaml/requests/endpoints/
//User enters search criteria into form

//User clicks submit button
   
//Form data is sent to Library of Congress via api


//send search criteria to Library of Congress via api
//receive results of the search
//Program sends search criteria to Library of Congress via api

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting in the default way

  const query = document.getElementById('query').value;
  const url = `https://www.loc.gov/apis/json-and-yaml/requests/endpoints/?q=${query}&format=json&start=1&count=10`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Process the data here
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

//Library of Congress returns results of search


//* As a user, I can either perform a generic search for data in all formats or I can select a format in the form to help filter results.


//User has check box that can elect data in all types or select types such as "newpaper", "magazine" or "book" etc.
//Program checks what boxes are selected and filters the results accordingly (Call function to filter)


//* As a user, I can see all of the results of my search displayed on a separate page.



//* As a user, I can conduct additional searches from the results page as well.

//User has check box that can elect data in all types or select types such as "newpaper", "magazine" or "book" etc.
//Program checks what boxes are selected and filters the results accordingly (Call function to filter)
if (document.getElementById('newspaper').checked) {
    // Call function to filter
    filter();
    http://id.loc.gov/search/?q=JavaScript&format=json&filter=format%3A("Newspaper")&start=1&count=10
    else if (document.getElementById('periodical').checked) {
    // Call function to filter
    filter();
    http://id.loc.gov/search/?q=JavaScript&format=json&filter=format%3A("Periodical")&start=1&count=10
    else if (document.getElementById('book').checked) { 
    // Call function to filter
    filter();
    http://id.loc.gov/search/?q=JavaScript&format=json&filter=format%3A("Book")&start=1&count=10
    else {
      //return all results
      http://id.loc.gov/search/?q=JavaScript&format=json&start=1&count=10
  }
//* As a user, I can see all of the results of my search displayed on a separate page.

fetch(url)
.then(response => response.json())
.then(data => {
  // Store the data in session storage to access it on the results page
 localStorage.setItem('searchResults', JSON.stringify(data));
  // Redirect the user to the results page
  window.location.href = 'results.html';
})
.catch(error => {
  console.error('Error:', error);
});
});
  

document.addEventListener('DOMContentLoaded', function() {
  const searchResults = JSON.parse(sessionStorage.getItem('searchResults'));
  if (searchResults) {
    console.log(searchResults);
    // Display the search results here
  } else {
    console.error('No search results found.');
  }
});
