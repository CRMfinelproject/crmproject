class Products {
    constructor(contentHtml) {
        this.contentHtml = contentHtml;
        this.triggerBtn = document.querySelector('#js-menu-products');
		this.currentBtn = this.triggerBtn.querySelector('.burger-menu__item');
        this.triggerBtn.addEventListener('click', () => this.render());
    };
    render(){
		this.target = event.target;
		this.prev = document.querySelector(".burger-menu__item--selected");
		if((typeof this.prev !== "undefined") && (this.prev !== this.target)){
			this.prev.classList.remove("burger-menu__item--selected");
		}
		this.currentBtn.classList.add("burger-menu__item--selected");
        document.querySelector('.content').innerHTML = this.contentHtml;
    }
}

let productsPageHtml = document.querySelector('#js-products-content').textContent.trim();
let productsPage = new Products(productsPageHtml);