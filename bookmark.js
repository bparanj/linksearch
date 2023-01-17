import data from './bookmarks.json' assert {type: 'json'};
				
window.dataTable = function () {
  return {
    items: data,
    searchInput: '',
    search(value) {
      if (value.length > 1) {
        const options = {
          shouldSort: true,
          keys: ['name']
        }                
        const fuse = new Fuse(data, options)
        this.items = fuse.search(value).map(element => element.item)
      } else {
        this.items = data
      }
      // console.log(this.items.length)      
    }
  }
}