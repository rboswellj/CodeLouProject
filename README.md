# Pixel Exploder
Final Project for Front End Web Development.

This is a portfolio site that will be used to display my development work.

Feature 1:

I have made a fully responsive menu bar that will expand vertically
while in mobile/small view. This uses a css class triggered by javascript
event listeners on the button and logo that will expand smoothly using
a css transition on the height property of the UL element of the nav.

and then switch to a horizontal navbar on medium and large.
The medium and large screen views also use media queries to change the look of the nav
and logo bars to better utilize available screen real estate.

The nav bar also features css transitions on the hover over on the link backgrounds.
This creates a smooth fade in and out on the background color and box shadow

Feature 2:
I have created a contact form that uses javascript to verify input.
It uses CSS class toggles to indicate field that do not meet the criteria.
The submit button saves the form inputs to session data,
and then the session data is read for a confirmation page that displays the input
and asks for confirmation. Then a php script runs on confirm to send the email.

Feature 3:
The home page has a header image that acts as a slide show. I used javascript
to alter the src attribute of the img tag. The javascript iterates through 
an array of image sources on a set timer. I also use CSS transitions to create fade in and 
out effects.The javascript toggles between these classes in order to trigger the transitions
at set times. The fade in is toggled on at function call, and the fade out is triggered
a half second before the transition.

Layout:
The page also uses css flexbox for the majority of its elements for positioning and layout.
The body is set to flex-direction row for the three outter containers
There are outer divisions in around header, main, and footer that are flex containers.
They are set to 100% width columns, and their contained elements are set to 80 center justify.
Then the elements contained within those outter containers are also positioned with flex properties.

The mobile view fills the width 100%, the medium and large views fill 80% with an outer border.