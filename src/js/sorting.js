const tHead = document.querySelector(".data-table-header");

const sortByName = () => {
	if(event.target.textContent === "Название товара"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			dataPage.sort(function(obj1, obj2) {
				if (obj1.name < obj2.name) return 1;
				if (obj1.name > obj2.name) return -1;
				return 0;
			});
			renderData();
		} else {
			dataPage.sort(function(obj1, obj2) {
				if (obj1.name < obj2.name) return -1;
				if (obj1.name > obj2.name) return 1;
				return 0;
			});
			renderData();
		}
	}

};

const sortByCat = () => {
	if(event.target.textContent === "Категория"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			dataPage.sort(function(obj1, obj2) {
				if (obj1.category < obj2.category) return 1;
				if (obj1.category > obj2.category) return -1;
				return 0;
			});
			renderData();
		} else {
			dataPage.sort(function(obj1, obj2) {
				if (obj1.category < obj2.category) return -1;
				if (obj1.category > obj2.category) return 1;
				return 0;
			});
			renderData();
		}	
	}
};


const sortByCount = () => {
	if(event.target.textContent === "Кол-во на складе"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			dataPage.sort(function(obj1, obj2) {
			return obj2.count - obj1.count;
			});
			renderData();
		} else {
			dataPage.sort(function(obj1, obj2) {
				return obj1.count - obj2.count;
			});
			renderData();
		}
	}
	
};


const sortByPrice = () => {
	if(event.target.textContent === "Цена"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			dataPage.sort(function(obj1, obj2) {
				return obj2.price - obj1.price;
			});
			renderData();
		} else {
			dataPage.sort(function(obj1, obj2) {
				return obj1.price - obj2.price;
			});
			renderData();
		}
	}
};


const sortByDate = () => {
	if(event.target.textContent === "Дата создания"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			dataPage.sort(function(obj1, obj2) {
				return (new Date(obj2.creationDate) - new Date(obj1.creationDate));
			});
			renderData();
		} else {
			dataPage.sort(function(obj1, obj2) {
				return (new Date(obj1.creationDate) - new Date(obj2.creationDate));
			});
			renderData();
		}
	}
};


const sortByWeight = () => {
	if(event.target.textContent === "Вес"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			dataPage.sort(function(obj1, obj2) {
				return obj2.weight - obj1.weight;
			});
			renderData();
		} else {
			dataPage.sort(function(obj1, obj2) {
				return obj1.weight - obj2.weight;
			});
			renderData();
		}
	}	
};


const sortBySize = () => {
	if(event.target.textContent === "Размеры(ШхВхД)"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			dataPage.sort(function(obj1, obj2) {
				let size1 = obj1.size.split("x");
				let size2 = obj2.size.split("x");
				let volume1 = size1[0] * size1[1] * size1[2];
				let volume2 = size2[0] * size2[1] * size2[2];
				return (volume2 - volume1);
			});
			renderData();
		} else {
			dataPage.sort(function(obj1, obj2) {
				let size1 = obj1.size.split("x");
				let size2 = obj2.size.split("x");
				let volume1 = size1[0] * size1[1] * size1[2];
				let volume2 = size2[0] * size2[1] * size2[2];
				return volume1 - volume2;
			});
			renderData();
		}
	}
};
	
tHead.addEventListener("click", function(){
	if(event.target.textContent === "Название товара") sortByName();
	if(event.target.textContent === "Категория") sortByCat();
	if(event.target.textContent === "Кол-во на складе") sortByCount();
	if(event.target.textContent === "Цена") sortByPrice();
	if(event.target.textContent === "Дата создания") sortByDate();
	if(event.target.textContent === "Вес") sortByWeight();
	if(event.target.textContent === "Размеры(ШхВхД)") sortBySize();
});
