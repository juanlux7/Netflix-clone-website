const tabItems = document.querySelectorAll('.tab-item');

const tabContentItems = document.querySelectorAll('.tab-content-item');

function removeBorder() {
    tabItems.forEach(tab => tab.classList.remove('tab-selected'))
}

function removeShow() {
    tabContentItems.forEach(tab => tab.classList.remove('show'))
}

function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-selected');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    console.log(tabContentItem);
    tabContentItem.classList.add('show');
}

tabItems.forEach(item => item.addEventListener('click', selectItem));
