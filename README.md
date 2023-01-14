# Link Search

A simple client side fuzzy search using Alpine, Fuse and Tailwind.

## Search and Table Files

Fuzzy search using Fuse.js. This is good enough for small to moderately large data sets. The table.html is simplified version of search.html found online. It removes features not required such as sorting, pagination, number of records to display etc. 

Library versions:

- Alpine.js			- 3.x.x
- Tailwind CSS  - 3.2.4
- Fuse.js       - 6.6.2

## Alpine HTML File

The alpine.html does an exact string search using Javascript. The search data is on the client and stored as a JSON collection of objects.

Library versions:

- Alpine.js			- 2.x.x
- Tailwind CSS  - 1.0

The alpine.html is only for learning purpose. Use the table.html for further development.

## Copy SSH Credentials

Customize the JSON data in ssh.html for your needs and open it in a browser to start using the search feature.

# Tasks

- On hitting enter display the results table and allow copy of command and password
- Use linksearch.html and display the links (title, Open button for the link opening in new tab)
- Fix the flicker when pressing escape to clear the text field. 
- Pressing escape once should clear the text field.
- On selecting a result row, clear the text field.