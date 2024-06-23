const orders = [];
const RENDER_EVENT = 'render-order';
const SAVED_EVENT = 'saved-order';
const STORAGE_KEY = ' ORDERS_LIST';

function generateId() {
  return +new Date();
}

function generateOrderObject(id, orderName, timeOrder ) {
  return {
    id,
    orderName,
    timeOrder
  }
}

function findOrder(orderId) {
  for (const orderItem of orders) {
    if (orderItem.id === orderId) {
      return orderItem;
    }
  }
  return null;
}

function findOrderIndex(orderId) {
  for (const index in orders) {
    if (orders[index].id === orderId) {
      return index;
    }
  }
  return -1;
}


function isStorageExist() {
  if (typeof (Storage) === undefined) {
    alert('Browser kamu tidak mendukung local storage');
    return false;
  }
  return true;
}

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(orders);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const order of data) {
      orders.push(order);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}


function makeTodo(orderObject) {
  const {id, orderName, timeOrder, } = orderObject;

  const textTitle = document.createElement('h3');
  textTitle.innerText = orderName;

  const textTimestamp = document.createElement('p');
  textTimestamp.innerText = timeOrder;

  const textContainer = document.createElement('div');
  textContainer.classList.add('inner');
  textContainer.append(textTitle, textTimestamp);

  const container = document.createElement('div');
  container.classList.add('order-item');
  container.append(textContainer);
  container.setAttribute('id', `todo-${id}`);

  const trashButton = document.createElement('button');
  trashButton.classList.add('btn-trash'); 
  trashButton.addEventListener('click', function () {
    removeOrder(id);
  });

  container.append(trashButton);

  return container;
}

function addOrder() {
  const textOrder = document.getElementById('item').value;
  const timeOrder = document.getElementById('date').value;

  const generatedID = generateId();
  const orderObject = generateOrderObject(generatedID, textOrder, timeOrder, false);
  orders.push(orderObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}


function removeOrder(orderId) {
  const orderTarget = findOrderIndex(orderId);

  if (orderTarget === -1) return;

  orders.splice(orderTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}


document.addEventListener('DOMContentLoaded', function () {

  const submitForm  = document.getElementById('form');

  submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addOrder();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener(SAVED_EVENT, () => {
  console.log(localStorage.getItem(STORAGE_KEY));
});

document.addEventListener(RENDER_EVENT, function () {
  const completedTODOList = document.getElementById('orders');

  completedTODOList.innerHTML = '';

  for (const orderItem of orders) {
    const todoElement = makeTodo(orderItem);
      completedTODOList.append(todoElement);
  }
})