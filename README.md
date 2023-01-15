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
| linksearch.html | Needs to be customized. Currently has the starting point 							 |
| table.html      | Removed number of rows dropdown and pagination. Can be used as the starting point |

The alpine.html does an exact string search using Javascript. The search data is on the client and stored as a JSON collection of objects. Library versions:

- Alpine.js			- 2.x.x
- Tailwind CSS  - 1.0

## Copy SSH Credentials to Clipboard

Customize the JSON data in ssh.html for your needs and open it in a browser to start using the search and copy to clipboard feature.

## Inventive Principles Used

| Principle        | Description |
| ---------------  | ----------- |
| Segmentation     | Divide a system or object into separate independent parts or sections. Make a system modular so that it becomes easy to put together and take apart   |
| Merging     		 | Merge in space - Merge related object to work together in space. HTML centric development.   |
| Nested Doll      | Allow one object to pass through an appropriate hole in another. Alpine directives.   |
| Prior Action     | Perform a useful action (either fully or partly) before it is needed. 70 to 90 percent reuse of code.   |
| Other Way Around | Turn the process upside down. Declarative style code in HTML.   |
| Dynamize     		 | Split a system into parts that are capable of moving relative to each other. CSS and Javascript libraries can be easily integrated.   |
| Partial or Excessive Action | If an action is difficult and can be easily done in future, better do it less or partial. Use the customized starter templates for new features.|

# Tasks

- Use Alpine tooltip component in ssh.html after the content is copied to clipboard: 'Copied!'. Learn how to pass a string and variable to the magic directive.
- Customize linksearch.html. Search feature with clear button. Change the data to title and link. Open the link in new tab.
- Setup paid Tailwind to make landing.html work
- Purine levels in foods (low, moderate, high). Sort by purine level.
- On hitting enter display the results table and allow copy of command and password
- Use linksearch.html and display the links (title, Open button for the link opening in new tab)
- Fix the flicker when pressing escape to clear the text field. 
- Pressing escape once should clear the text field.
- On selecting a result row, clear the text field.