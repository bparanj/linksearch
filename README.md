# Link Search

A simple client side search one page webapp using Alpine and Tailwind.

## Search and Table Files

Fuzzy search using Fuse.js. This is good enough for small to moderately large data sets. The table.html is simplified version of search.html found online. It removes features not required. 

Client side search using:

- Alpine.js			- 3.x.x
- Tailwind CSS  - 3.2.4
- Fuse.js       - 6.6.2

## Alpine HTML File

The alpine.html does an exact string search using Javascript. The search data is on the client and stored as a JSON collection of objects.

Client side search using:

- Alpine.js			- 2.x.x
- Tailwind CSS  - 1.0

The alpine.html is only for learning purpose. Use the table.html for further development.

## Copy to Clipboard

The copy.html uses Javascript to copy text to clipboard.

- Integrate copy.html with the ssh.html to copy the password and command to clipboard.

# Tasks

- Use linksearch.html and display the links (title, Open button for the link opening in new tab)
- Fix the flicker when pressing escape to clear the text field. 
- Pressing escape once should clear the text field.
- On selecting a result row, clear the text field.