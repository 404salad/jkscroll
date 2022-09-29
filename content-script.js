addEventListener('keydown', event => {
  if(event.target !== document.body) return

  switch(event.key){
    case 'j': scrollBy(0, 50); break;
    case 'k': scrollBy(0, -50); break;
    case 'u': chrome.runtime.sendMessage('u'); break;
    case 'd': chrome.runtime.sendMessage('d'); break;
  }
})
