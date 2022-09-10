console.warn('Running Pipify.js');
try {
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
        console.log('PiP closed');
    } else if (document.URL == 'https://www.youtube.com/') {
        console.error(`Cannot PiP on YouTube Main Page. Choose a video first`);
    } else {
        document.getElementsByTagName('video')[0].requestPictureInPicture();
        console.log('Success! PiP created!');
    }
} catch {
    console.error('No video found on this page');
}
console.log(`Pipify completed!`);