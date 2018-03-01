;(() => {
  var Menu__button = document.getElementById('Menu__button');
  var Menu__list = document.getElementById('Menu__list');
  var Header__NavigationItem = document.getElementsByClassName('Header__NavigationItem--link');
  var isActive = false

  Menu__button.addEventListener('click',function (e) {
    isActive = !isActive
    if (isActive) {//ボタンが開いている時
      Menu__button.className = "Header__Menu active"
      Menu__list.className = "Header__Navigation active"
      // Header__NavigationItem.className = "Header__NavigationItem active"

    } else {//ボタンが閉まっている時
      Menu__button.className = "Header__Menu"
      Menu__list.className = "Header__Navigation"
      // Header__NavigationItem.className = "Header__NavigationItem"
    }
    e.preventDefault()
  })

  function closeMenu() {
     isActive = false
     Menu__button.className = "Header__Menu"
     Menu__list.className = "Header__Navigation"
  }
  for (var target of Header__NavigationItem) {
    target.addEventListener("click",closeMenu)
  }

})()
