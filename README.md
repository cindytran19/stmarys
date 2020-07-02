# stmarys
The St. Mary's API is a simple API based on the Chronicles of St. Mary's series by Jodi Taylor. There are currently three routes that can be used to get information about the series' characters, titles, and to make a simulated "jump." 

## Background 
I created this API as an opportunity to develop my skills in REST API documentation. I used NodeJS and am hosting it via Amazon Web Services' API Gateway. Please visit www.cindytran.info/stmarys.html to see the documentation and www.cindytran.info to learn more about me. 

## How to Use the API
This API allows you to make `GET` requests to obtain information on the characters and titles of the St. Mary's series. You can also make a `GET` request to simulate a "jump assignment" like in the series. 

To make a request, add your desired endpoint to the URL `https://apis.cindytran.info/stmarys/`. For example, `https://apis.cindytran.info/stmarys/characters` will get you a list of all characters within the series. 

The valid endpoints are:

* `characters` for a list of all characters within the series
* `titles` for a list of all titles within the series
* `jump` for a simulated "jump"

The `characters` and `titles` endpoints can be further modified to sort the requested data. For example, `https://apis.cindytran.info/stmarys/characters/orderBy/name` will get you a list of all characters within the series sorted in alphabetical order by last name. 

You can further modify the `characters` endpoint with:

* `/orderBy/name` to order the characters in alphabetical order by last name
* `/section/{section}` to sort the characters by their section in the series. Replace {section} with one of: Admin, History, Kitchen, IT, Medical, R&D, Security, Technical, Wardrobe, None, Traitor (Note: case sensitive)
* `status/{status}` to sort the characters by their current life status in the series. Replace {status} with one of: Dead, Alive, Unknown (note: case sensitive)

You can further modify the `titles` endpoint with: 

* `/orderBy/published` to order the titles by the year they were published
* `/orderBy/story` to order the titles in chronological story order
* `/{storyType}` to sort the titles by their story type. Replace {storyType} with one of: Novel, ShortStory (note: case sensitive)
