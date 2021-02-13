const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const bodyRef = document.querySelector('body');
  let themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');

  themeSwitchToggleRef.addEventListener('change', themesChange);

  function themesChange () {  
    if (themeSwitchToggleRef.checked !== true) {
      bodyRef.classList.remove(Theme.DARK); 
      bodyRef.classList.add(Theme.LIGHT);
      // themeSwitchToggleRef.removeEventListener;
    }
    else {
      bodyRef.classList.remove(Theme.LIGHT); 
      bodyRef.classList.add(Theme.DARK);
      // themeSwitchToggleRef.removeEventListener;
    }
  }