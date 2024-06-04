let downloadButton = document.querySelector('.download-button');
let urlInput = document.querySelector('.url');
downloadButton.addEventListener('click', () => {
    // console.log(`URL: ${urlInput.value}`);
    console.log('URL: ' + urlInput.value);
    downloadVideo(urlInput.value);
});
function downloadVideo(url) {
    // We will put code here later
}