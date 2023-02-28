const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]

let cont = document.querySelector('.container')

for (item of data){
    let item = document.createElement('div')
    let img = document.createElement('img')
    let h2 = document.createElement('h2')
    let pOne =  document.createElement('p')
    let button = document.createElement('button')
    let hr = document.createElement('hr')
    let pTwo = document.createElement('h2')
    let span = document.createElement('span')
    let imgOne = document.createElement('img')
    let spanTwo = document.createElement('span')
    let imgTwo = document.createElement('img')
    let spanThree = document.createElement('span')
    let h2Three = document.createElement('h2')
    let spanThee = document.createElement('span')
    let imgThree = document.createElement('img')
    let spanFour = document.createElement('span')
    let imgFour = document.createElement('img')
    let spanFive = document.createElement('span')
    let h2Four = document.createElement('h2')
    let p = document.createElement('span')


    item.classList.add('item')
    img.src =  `./img/${item.img}.png`
    h2.classList = item.title
    pOne.classList.add = 'from' + item.price
    button.classList.add = "Buy"
    pTwo.classList.add = item.specs.display.size
    span.classList.add = item.specs.display.title
    imgOne.classList.add = item.url
    spanTwo.classList.add = item.specs.chip.title
    imgTwo.classList.add = 
    spanThree.classList.add = item.specs.memory.size + type

    item.append(img, h2, p)
    button.append (button)



}