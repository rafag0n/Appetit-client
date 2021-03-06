let couscouz = {
    _id: '1',
    category: 'Couscous',
    name: 'Couscous',
    price: 3.25,
    imageUrl: 'url',
    custom: [{
        name: 'Grains',
        options: ['Rice','Corn'],
        multiple: false,
        required: true
    }]
}

let couscouzSandwich = {
    _id: '2',
    category: 'Couscous',
    name: 'Couscous Sandwich',
    imageUrl: 'url',
    price: 1.25,
    custom: [{
        name: 'Grains',
        options: ['Rice','Corn'],
        multiple: false,
        required: true
    },{
        name: 'Ingredients',
        options: ['Ham', 'Cheese', 'Lettuce', 'Olive oil'],
        multiple: true,
        required: false
    }]
}


let wholeWheatBread = {
    _id: '3',
    category: 'Breads',
    name: 'Whole wheat bread',
    price: 1.25,
    imageUrl: 'url',
    custom: [{
        name: 'Toppings',
        options: ['Granola','Corn Flakes','Condensed Milk'],
        multiple: true,
        required: false
    }]
}

let frenchBread = {
    _id: '4',
    category: 'Breads',
    name: 'French Bread',
    price: 0.50,
    imageUrl: 'url',
    custom: [],
}

let squareBread = {
    _id: '5',
    category: 'Breads',
    name: 'Square Bread',
    price: 0.50,
    imageUrl: 'url',
    custom: [{
        name: 'Toppings',
        options: ['Granola','Corn Flakes','Condensed Milk'],
        multiple: true,
        required: false
    },
    {
        name: 'Size',
        options: ['Double Slice','Half Slice'],
        multiple: false,
        required: true
    }]
}

const products = [squareBread,frenchBread,wholeWheatBread,couscouz,couscouzSandwich]

export default products;