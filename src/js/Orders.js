class Orders {
    constructor() {
        this.triggerBtn = document.querySelector('#js-menu-orders');
		this.currentBtn = this.triggerBtn.querySelector('.burger-menu__item');
        this.triggerBtn.addEventListener('click', () => this.render());
		//this.triggerBtn.addEventListener('click', () => table.renderData(productTableFields));
		
    };
    render(){
		this.target = event.target;
		this.prev = document.querySelector(".burger-menu__item--selected");
		if((typeof this.prev !== "undefined") && (this.prev !== this.target)){
			this.prev.classList.remove("burger-menu__item--selected");
		}
		this.currentBtn.classList.add("burger-menu__item--selected");
		table.redrawTable(productTableFields);
    }
}

let ordersPage = new Orders();