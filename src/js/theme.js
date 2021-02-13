const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const bodyRef = document.querySelector('body');
  let themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
  
  themeSwitchToggleRef.onclick = function() {
    bodyRef.classList.toggle(Theme.DARK);
  }
//   console.log(themeSwitchToggleRef);
  
//   bodyRef.classList.add(Theme.DARK);
//   bodyRef.setAttribute('class', Theme.DARK)
//   console.dir(bodyRef);
  // if (themeSwitchToggleRef) {
  //   bodyRef.classList.remove(Theme.DARK); 
  //   bodyRef.classList.add(Theme.LIGHT);
  //   console.log(Theme.LIGHT);
  // }
  // else {
  //   bodyRef.classList.remove(Theme.LIGHT); 
  //   bodyRef.classList.add(Theme.DARK);
  // }