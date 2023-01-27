(() => {
    const store = new Store();
    store.add(new Milk('123', 'milk1', 'SmartCow', 12, '15'));
    store.add(new Wine('124', 'Red wine', 'Fanagoria', 45, 15));
    store.add(new Chocolate('125', 'Choko', 'Lindt', 10, 'dark'));


    const $productsLink = $('#productsLink');
    const $addLink = $('#addLink');
    const $form = $('#addForm');
    const $sideNav = $('#sideNav');
    const $content = $('#content');
    const $section = $('#section');
    const $optionalParameter = $('#optionalParameter');
    const $type = $('#type');


    const getOptionalField = (prod) =>{
        switch (prod.constructor.name) {
            case 'Milk':
                return `Fat - ${prod.fat}`;
            case 'Chocolate':
                return `Kind - ${prod.kind}`;
            case 'Wine':
                return `Alcohol - ${prod.alcohol}`;
        }
    }

    const renderProducts = (products) => {
        $content.html(`${products.map((prod)=> {
                return `
            <div class = 'card'>
            <h2>${prod.constructor.name}</h2>
            <h3 class="title">${prod.title}</h3>
            <h3 class="sub-title">${prod.manufacture}</h3>
            <h4 class ="price">Price: ${prod.price}</h4>
            <h4>${getOptionalField(prod)}</h4>
    </div>
        `
            }).join('')};
            
            `
        )};

    $form.css('display', 'none');
    renderProducts(store.getAll());

    $productsLink.on('click', () => {
        $productsLink.addClass('active');
        $addLink.removeClass('active');
        $form.css('display', 'none');
        $sideNav.css('display', 'block');
        $content.css('display', 'flex');
        $section.removeClass('center');
        renderProducts(store.getAll());
    });
    $addLink.on('click', () => {
        $addLink.addClass('active');
        $productsLink.removeClass('active');
        $form.css('display', 'block');
        $sideNav.css('display', 'none');
        $content.css('display', 'none');
        $section.addClass('center');
    });

    $form.on('submit', (event)=>{
        event.preventDefault();
        switch(event.target.type.value) {
            case 'milk':
                store.add(new Milk(
                    event.target.id.value,
                    event.target.title.value,
                    event.target.manufacture.value,
                    event.target.price.value,
                    event.target.fat.value,
                    ));
                break;
            case 'chocolate':
                store.add(new Chocolate(
                    event.target.id.value,
                    event.target.title.value,
                    event.target.manufacture.value,
                    event.target.price.value,
                    event.target.kind.value,
                ));
                break;
            case 'wine':
                store.add(new Wine(
                    event.target.id.value,
                    event.target.title.value,
                    event.target.manufacture.value,
                    event.target.price.value,
                    event.target.alcohol.value,

                ));
                break;
        }
event.target.reset();

    });

    $type.on('change', (event)=>{
        switch (event.target.value) {
            case 'milk':
               $optionalParameter.html(`<input class="form-control" type="number" name="fat"
                         placeholder="Type fat">`);
                break;
            case 'chocolate':
                $optionalParameter.html(`<input class="form-control" type="number" name="kind"
                         placeholder="Type kind">`);
                break;
            case 'wine':
                $optionalParameter.html(`<input class="form-control" type="number" name="alc"
                         placeholder="Type alcohol">`);
                break;
        }
    })

    $sideNav.on('click', (event)=>{
        renderProducts(store.getByType(event.target.getAttribute('data-name')));
    })


})();