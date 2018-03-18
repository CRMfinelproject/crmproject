function createElement(par, tag, elemClass) {
    let element = document.createElement(tag);
    let elemClassArr = elemClass.split(" ");
    elemClassArr.map(elemClass => element.classList.add(elemClass));
    par.appendChild(element);
    return element;
}

class TableControlBlock {
    constructor(addText) {
        this.addText = addText;

        if (!document.body.querySelector(".table-control")) {
            this.container = createElement(document.body.querySelector(".content"), 'div', 'table-control');
            this.render();
        } else {
            this.container = document.body.querySelector(".table-control");
            this.renderButtonTitle();
            };
        
        
        this.actionSubmenu = this.container.querySelector(".table-control__button--actions");
        this.renderActionSubmenu();
        this.actionSubmenu.addEventListener('click', this.showActionSubmenu.bind(this));
        // document.body.querySelector(".content").addEventListener('click', this.showActionSubmenu.bind(this));
    }

    render() {
        this.container.insertAdjacentHTML("afterbegin", `
            <div class="table-control__button table-control__button--actions">
                <div class="table-control__button__title">Действия с выбранными</div>
                <div class="table-control__button__arrow"></div>
            </div>   
            <div class="table-control__button table-control__button--add-new">
                <img src="../images/round-add-button.svg" alt="+" class="table-control__button__icon">
                <div class="table-control__button__title">${this.addText}</div>
            </div> `);
    }

    renderButtonTitle() {
        this.container.querySelector(".table-control__button--add-new .table-control__button__title").innerHTML = this.addText;
    }

    renderActionSubmenu() {
        this.actionSubmenu.insertAdjacentHTML("beforeend", `
            <div class="table-control__submenu">
                <img src="../images/garbage.svg" alt="+" class="table-control__submenu__icon">
                <div class="table-control__button__title table-control__submenu__title">Удалить</div>
            </div>`
        );
    }

    showActionSubmenu(event) {
        debugger;
        if (event.target.classList.contains("table-control__button--actions") || 
            event.target.parentElement.classList.contains("table-control__button--actions") ||
            event.target.classList.contains("table-control__submenu__icon") || 
            event.target.classList.contains("table-control__submenu__title")) {
            let actionsButton = document.body.querySelector(".table-control__button--actions");
            actionsButton.classList.toggle("table-control__submenu--opened");
            let arrow = document.body.querySelector(".table-control__button__arrow");
            let angle;
            if (actionsButton.classList.contains("table-control__submenu--opened")) {
                angle = 45;
                let id = setInterval(() => {
                    if (angle == 225) {
                        clearInterval(id);
                    } else {
                        angle = angle + 10;
                        arrow.style.transform = `rotate(${angle}deg)`;
                    }
                }, 10);
            
            } else {
                angle = 225;
                let id = setInterval(() => {
                    if (angle == 45) {
                        clearInterval(id);
                    } else {
                        angle = angle - 10;
                        arrow.style.transform = `rotate(${angle}deg)`;
                    }
                }, 10);
            };
        }

        let submenu = document.body.querySelector(".table-control__submenu");
        submenu.addEventListener('click', this.deleteSelected());
        
    }

    deleteSelected() {
        if (event.target.classList.contains("table-control__submenu__icon") || event.target.classList.contains("table-control__submenu__title")) {
            debugger;
            let rowsToDel = Array.from(table.container.children[1].querySelectorAll("input:checked"),
                elem => elem.parentElement.parentElement);

            let idsToDel = rowsToDel.map(row => {
                row.classList.add('setToDel');
                return row.id.replace('row-', '');
            });

            rowsToDel.map (row => {
                row.children[6].children[0].classList.add("close");
                row.children[6].children[3].classList.remove("close");
            });

            if (idsToDel.length != 0) {
                timerId = setTimeout(() => {
                    let countToDel = 0;
                    while (countToDel != idsToDel.length) {
                        for (let i=0; i<data.length; i++) {
                            idsToDel.map(productToDel => {
                                if (data[i].id == productToDel) {
                                    data.splice(i, 1);
                                    countToDel++;
                                }
                            })
                        };
                    };
                    table.renderData();
                    page.setSettings();
                    page.render();
                }, 5000);
        }
    }
}
}

let tableControl = new TableControlBlock("новый товар");