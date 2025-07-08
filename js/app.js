function addMessage(browser, donTTryToCloseMeDick) {
  
}

window.addEventListener('beforeunload', function (event) {
  addMessage('browser', "don't try to close me! dick!");
  event.returnValue = ':(';
  return ':(';
});
