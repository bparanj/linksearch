import data from './books.json' assert {type: 'json'};

window.dataTable = function () {
  return {
    items: [],
    view: 5,
    searchInput: '',
    sorted: {
      field: 'name',
      rule: 'asc'
    },
    initData() {
      this.items = data.sort(this.compareOnKey('name', 'asc'))
    },
    compareOnKey(key, rule) {
      return function(a, b) { 
        if (key === 'name' || key === 'author' ) {
          let comparison = 0
          const fieldA = a[key].toUpperCase()
          const fieldB = b[key].toUpperCase()
          if (rule === 'asc') {
            if (fieldA > fieldB) {
              comparison = 1;
            } else if (fieldA < fieldB) {
              comparison = -1;
            }
          } else {
            if (fieldA < fieldB) {
              comparison = 1;
            } else if (fieldA > fieldB) {
              comparison = -1;
            }
          }
          return comparison
        } else {
          if (rule === 'asc') {
            return a.year - b.year
          } else {
            return b.year - a.year
          }
        }
      }
    },
    checkView(index) {
      return true
    },
    checkPage(item) {
      if (item <= this.currentPage + 5) {
        return true
      }
      return false
    },
    search(value) {
      if (value.length > 1) {
        const options = {
          shouldSort: true,
          keys: ['name', 'author'],
          threshold: 0
        }                
        const fuse = new Fuse(data, options)
        this.items = fuse.search(value).map(elem => elem.item)
      } else {
        this.items = data
      }
      // console.log(this.items.length)
    },
    sort(field, rule) {
      this.items = this.items.sort(this.compareOnKey(field, rule))
      this.sorted.field = field
      this.sorted.rule = rule
    }
  }
}