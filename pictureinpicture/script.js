const videoElement = document.getElementById('video');
const button = document.getElementById('button');


async function selectMediaStream() {
  let captureStream = null;

  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia();
  } catch(err) {
    console.error("Error: " + err);
  }
  return captureStream;
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture()
    button.disabled = false;
})
selectMediaStream();