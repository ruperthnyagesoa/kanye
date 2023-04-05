# Kanye "Rest" simple webapp

## Built as part of Moringa End of Phase Project. Week 4 - Learning Api's.


### Prerequisites

A simple web browser!

### How it works

It sends a simple fetch to send a GET request to `https://api.kanye.rest/` and will extract the data from the response object. The data received is in JSON format and then parsed and displayed on the page using a querySelector when the page loads.

When the button is pressed the original quote is saved and displayed on the list on the bottom of the page. A new quote is retrieved and checked if it is a duplicate of one of the previous quotes. If it is it isn't saved.

