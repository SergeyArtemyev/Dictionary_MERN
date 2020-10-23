export default function (){
  const modal = document.querySelector('.no-words-modal');
  modal.classList.add('no-words');
}

export const removeModal = () => {
  const modal = document.querySelector('.no-words-modal');
  modal.classList.remove('no-words');
}
