document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const monsterListItem = createMonsterListItem(event.target);
  const monsterList = document.querySelector('#monster-list');
  monsterList.appendChild(monsterListItem);

  event.target.reset();
}

const createMonsterListItem = function (form) {
  const monsterListItem = document.createElement('li');
  monsterListItem.classList.add('monster-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  monsterListItem.appendChild(name);

  const species = document.createElement('h3');
  species.textContent = form.species.value;
  monsterListItem.appendChild(species);

  const picture = document.createElement('img');
  picture.setAttribute('src', `${form.picture.value}`);
  picture.setAttribute("height", "200");
  picture.setAttribute("width", "400");
  picture.setAttribute("alt", "suppp");
  monsterListItem.appendChild(picture);

  const location = document.createElement('p');
  location.textContent = ` Last Spotted: ${form.location.value}`;
  monsterListItem.appendChild(location);

  return monsterListItem;
}

const handleDeleteAllClick = function (event) {
  const monsterList = document.querySelector('#monster-list');
  monsterList.innerHTML = '';
}
