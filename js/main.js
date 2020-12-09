import '../styles/main.scss'

const menu = {
  $hamburger: document.querySelector('#header-nav'),
  $menu: document.querySelector('#menu'),
  isShow: false,

  show(ev) {
    if (ev.target === this.$hamburger && !this.isShow ) {
      this.$menu.classList.remove('hide')
      this.$menu.classList.add('show')
      this.isShow = true
    }
  },

  hide() { {
      this.$menu.classList.remove('show')
      this.$menu.classList.add('hide')
      this.isShow = false
    }
  }

}

document.addEventListener("click", (ev) => {
  if (ev.target === menu.$hamburger && !menu.isShow) {
    return menu.show(ev)
  } else if (ev.target === menu.$hamburger && menu.isShow) {
    return menu.hide()
  } else if (ev.target != menu.$menu) {
    return menu.hide()
  }
})

document.addEventListener("scroll", (ev) => {
  return menu.hide()
})

