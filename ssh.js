import data from './ssh.json' assert {type: 'json'};

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

document.addEventListener('alpine:init', () => {
	
	// Magic: $clipboard
	Alpine.magic('clipboard', () => {
	  return subject => navigator.clipboard.writeText(subject)
	})

  // Magic: $tooltip
  Alpine.magic('tooltip', el => message => {

    let instance = tippy(el, { content: message, trigger: 'manual' })

    instance.show()

    setTimeout(() => {
      instance.hide()

      setTimeout(() => instance.destroy(), 150)
    }, 2000)
  })

})
