
    function buildQueryURL(){
        //queryURL is the URL we will use to query the API
        var queryURL =  "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        
        //Begin building an object to contain our API call's query params
        //Set the API key
        var queryParams = { "api-key": "a3256a565d0146138984ea71f3e4d42e"};

        //Grab text the user typed into the search input, add to the queryParams object
        queryParams.q = $("#search-term")
            .val()
            .trim();
        
        url += '?' + $.param({
        'api-key': "a3256a565d0146138984ea71f3e4d42e",
        'q': "Barack Obama",
        'begin_date': "20180101",
        'end_date': "20180105"
        });
        $.ajax({
        url: url,
        method: 'GET',
        }).done(function(result) {
        console.log(result);
        }).fail(function(err) {
        throw err;
        });
    }
    $("btn btn-primary").on("click", function() {
    //   var searchTerm = $(this).attr("search-term");
    //   var queryURL = "https://query.nytimes.com/gst/fullpage.html?" +
    //     searchTerm + "&api_key=a3256a565d0146138984ea71f3e4d42e";  //Matt H API Key

        // var queryURL = "https://api.nytimes.com/svc/archive/v1/2014/1.json";
        // queryURL += '?' + $.param({
        // 'api-key': "a3256a565d0146138984ea71f3e4d42e"
        // });

    //https://query.nytimes.com/gst/fullpage.html?res=950DEED61F3AF932A35752C0A9629D8B63

    

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        // Run this file, click the submit button, and see what the response object looks like in the browser's console.
        // Open up the data key. Study the keys and how the JSON is structured.

        console.log(response);
        
        // Step 2: since the image information is inside of the data key,
        // make a variable named results and set it equal to response.data
        var results = response.data;
        //console.log(results);

        // ========================

        for (var i = 0; i < results.length; i++) {

            // Step 3: uncomment the for loop above and the closing curly bracket below.
            // DONE
            // Make a div with jQuery and store it in a variable named animalDiv.
            var animalDiv = $("<div>");
            
            //console.log(animalDiv);
            // Make a paragraph tag with jQuery and store it in a variable named p.
            var p = $("<p>").text("Rating:  " + results[i].rating);
            // Set the inner text of the paragraph to the rating of the image in results[i].
            //p.text(results[i].rating);
            
            //console.log(p);
            // Make an image tag with jQuery and store it in a variable named animalImage.
            var animalImage = $("<img>");
            //console.log(animalImage);
            // Set the image's src to results[i]'s fixed_height.url.

            //To Debug this:
            //console.log(results[i]);
            //To debug, uncomment the above line of code to help in debugging. 
            animalImage.attr("src", results[i].images.fixed_height.url);
            // Append the p variable to the animalDiv variable.
            p.append(animalDiv);
            // Append the animalImage variable to the animalDiv variable.
            animalDiv.append(animalImage);
            // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
            $("#gifs-appear-here").prepend(animalDiv);

            // ============= put step 3 in between these dashes ======================

            // ==================================
        }

      });
    });
