# Link Search

A simple client side fuzzy search using Alpine, Fuse and Tailwind.

Fuzzy search using Fuse.js. This is good enough for small to moderately large data sets. 

## Dependencies

Library Versions

- Alpine.js			- 3.x.x
- Tailwind CSS  - 3.2.4
- Fuse.js       - 6.6.2

## File Description

### Ready for Use

| File Name       | Description |
| --------------- | ----------- |
| ssh.html        | Ready to use for search and copy credentials to clipboard 						 |
| copy.html       | Simple javascript copy feature 																				 |
| bookmark.html   | First working version complete													 							 |
| alpine.html     | Used for learning purposes only 																			 |

The alpine.html does an exact string search using Javascript. The search data is on the client and stored as a JSON collection of objects. Library versions:

- Alpine.js			- 2.x.x
- Tailwind CSS  - 1.0

### Not Ready

| File Name       | Description |
| --------------- | ----------- |
| search.html     | Original file found online (search, sort, paginate, rows to display)   |
| table.html      | Simplified version of search.html 															       |
| landing.html    | Uses paid Tailwind components  																				 |
| table.html      | Removed number of rows dropdown and pagination. Starting point				 |

## Copy SSH Credentials to Clipboard

Customize the JSON data in ssh.json for your needs and open ssh.html in a browser to start using the search and copy to clipboard feature.

### Dependencies

- Tippy
- Popper

## Search Hyperlinks

Customize the JSON data in bookmark.json for your needs and open bookmark.html in a browser to start using the search and open link in new tab feature.

The bookmark link is dynamically bound to a variable using Aline bind directive.

# Tasks

- Setup paid Tailwind to make landing.html work
- Purine levels in foods (low, moderate, high). Sort by purine level.

## Nice to Haves

- Customize bookmark.html. Search feature with clear button. Polish the UI. 
- In ssh.html, on hitting enter display the results table and allow copy of command and password.
- Fix the flicker when pressing escape to clear the text field. 
- Pressing escape once should clear the text field. Currently you have to hit escape twice.
- On selecting a result row, clear the text field.
- Use https://www.npmjs.com/package/convert-csv-to-json npm package to convert CSV file to JSON

# Code Snippets

## Remove Pairs

For removing unwanted key-value pair in a list of JSON objects:

```javascript
for(var i = 0; i < data.length; i++) {
	delete data[i]['year'];
}
```

View the result:

```
console.log(data)
console.table(data)
```

Right click on the data object and click Copy object in Javascript console.

## CSV to JSON Converter

```javascript
let csvToJson = require('convert-csv-to-json');

let fileInputName = 'test.csv'; 
let fileOutputName = 'test.json';

csvToJson.fieldDelimiter(',')
csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
```

# Tailwind Setup

Versions

Node : v18.12.1
npm : 9.3.1
Tailwind : 3.2

See tailwind.html for Inter font family CDN link. See tailwind.config.js for Inter font configuration.

# Inventive Principles Used

| Principle        | Description |
| ---------------  | ----------- |
| Segmentation     | Divide a system or object into separate independent parts or sections. Make a system modular so that it becomes easy to put together and take apart   |
| Merging     		 | Merge in space - Merge related object to work together in space. HTML centric development.   |
| Nested Doll      | Allow one object to pass through an appropriate hole in another. Alpine directives.   |
| Prior Action     | Perform a useful action (either fully or partly) before it is needed. 70 to 90 percent reuse of code.   |
| Other Way Around | Turn the process upside down. Declarative style code in HTML.   |
| Dynamize     		 | Split a system into parts that are capable of moving relative to each other. CSS and Javascript libraries can be easily integrated.   |
| Partial or Excessive Action | If an action is difficult and can be easily done in future, better do it less or partial. Use the customized starter templates for new features.|


 
