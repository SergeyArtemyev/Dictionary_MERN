export default function (e, loading) {
  if(!loading){
    const games = document.querySelectorAll('.game');
    games.forEach((game) => {
      if (game.classList.contains('game-active')) {
        game.classList.remove('game-active');
      }
    });
    games.forEach((game) => {
      if (e.target.innerHTML === game.getAttribute('data-target')) {
        game.classList.add('game-active');
      }
    });
  }
  e.preventDefault();
};