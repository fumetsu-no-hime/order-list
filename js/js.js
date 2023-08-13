const orders = document.querySelector('.orders')
const orders2 = document.querySelector('.orders-2')
const menuLevel = document.querySelector('#MenuLevel')
const twoLevel = document.querySelector('#twoLevel')
const threeLevel = document.querySelector('#threeLevel')
const navItem = document.querySelector('#navItem')
const chevronDown = document.querySelector('.chevron-down')
const chevronDown1 = document.querySelector('.chevron-down-1')
const chevronDown2 = document.querySelector('.chevron-down-2')
const chevronDown3 = document.querySelector('.chevron-down-3')
const chevronDown4 = document.querySelector('.chevron-down-4')
const chevronDown5 = document.querySelector('.chevron-down-5')

orders.addEventListener('click', () => {
    chevronDown.classList.toggle('rotate')
});
orders2.addEventListener('click', () => {
    chevronDown5.classList.toggle('rotate')
});
menuLevel.addEventListener('click', () => {
    chevronDown1.classList.toggle('rotate')
});
twoLevel.addEventListener('click', () => {
    chevronDown2.classList.toggle('rotate')
});
threeLevel.addEventListener('click', () => {
    chevronDown3.classList.toggle('rotate')
});
navItem.addEventListener('click', () => {
    chevronDown4.classList.toggle('rotate')
});