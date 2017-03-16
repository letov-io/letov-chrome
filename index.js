import Letov from 'letov-browserify';

function say (e) {
    e.clipboardData.setData('text/plain', `Как говорил Летов: ${window.Letov()}`);
    e.preventDefault();
}

chrome.browserAction.onClicked.addListener(function(tab) {
	document.addEventListener('copy', say);
	document.execCommand('copy');
	document.removeEventListener('copy', say);
});