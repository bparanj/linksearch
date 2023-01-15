# Link Search

A simple client side fuzzy search using Alpine, Fuse and Tailwind.

Fuzzy search using Fuse.js. This is good enough for small to moderately large data sets. 

## Dependencies

Library Versions

- Alpine.js			- 3.x.x
- Tailwind CSS  - 3.2.4
- Fuse.js       - 6.6.2

## File Description

| File Name       | Description |
| --------------- | ----------- |
| search.html     | Original file found online (search, sort, paginate, rows to display)   |
| table.html      | Simplified version of search.html 															       |
| ssh.html        | Ready to use for search and copy credentials to clipboard 						 |
| alpine.html     | Used for learning purposes only 																			 |
| copy.html       | Simple javascript copy feature 																				 |
| landing.html    | Uses paid Tailwind components  																				 |
| linksearch.html | Needs to be customized. Currently has the starting point 							|
| table.html      | Removed number of rows dropdown and pagination. Can be used as the starting point |

The alpine.html does an exact string search using Javascript. The search data is on the client and stored as a JSON collection of objects. Library versions:

- Alpine.js			- 2.x.x
- Tailwind CSS  - 1.0

## Copy SSH Credentials to Clipboard

Customize the JSON data in ssh.html for your needs and open it in a browser to start using the search and copy to clipboard feature.

# Tasks

- Setup paid Tailwind to make landing.html work
- On hitting enter display the results table and allow copy of command and password
- Use linksearch.html and display the links (title, Open button for the link opening in new tab)
- Fix the flicker when pressing escape to clear the text field. 
- Pressing escape once should clear the text field.
- On selecting a result row, clear the text field.