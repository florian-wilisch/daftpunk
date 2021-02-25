// const audioPlayer = document.querySelector('audio')
// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//   // Change the src to be the path to the audio
//   audioPlayer.src = './sounds/work_it.wav'
//   // Playing it
//   audioPlayer.play()
// })

//


const buttons = Array.from(document.querySelectorAll('button'))

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('audio').src = './sounds/' + button.innerHTML.toLowerCase().replace(' ','_') + '.wav'
    document.querySelector('audio').play()
  })
  button.addEventListener('mousedown', () => {
    button.classList.add('boom')
  })
  button.addEventListener('mouseup', () => {
    button.classList.remove('boom')
  })
})