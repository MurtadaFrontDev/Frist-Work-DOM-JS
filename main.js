
// Body
let body = document.querySelector('body');

body.style = `
font-family: 'Comfortaa', cursive;
`

// Header
let header = document.createElement('header');


let continerHeader = document.createElement('div');
continerHeader.className = 'container';

let logo = document.createElement('h3');
logo.className = 'logo';
let logoText = document.createTextNode('Elzero');

let navBar = document.createElement('nav');
let list = document.createElement('ul');
let liHome = document.createElement('li');
liHome.appendChild(document.createTextNode('Home'));
liHome.className = 'liA';
let liAbout = document.createElement('li');
liAbout.appendChild(document.createTextNode('About'));
liAbout.className = 'liA';
let liServes = document.createElement('li');
liServes.appendChild(document.createTextNode('Serves'));
liServes.className = 'liA';
let liContint = document.createElement('li');
liContint.appendChild(document.createTextNode('Contint'));
liContint.className = 'liA';

// Append Header 
body.appendChild(header);
header.appendChild(continerHeader);
continerHeader.appendChild(logo);
logo.appendChild(logoText);
continerHeader.appendChild(navBar);
navBar.appendChild(list);
list.appendChild(liHome);
list.appendChild(liAbout);
list.appendChild(liServes);
list.appendChild(liContint);
// Style the header 
header.style = `


`
continerHeader.style = `
display: flex;
justify-content: space-between;
align-items: center;
padding : 10px  120px;
`
logo.style = `
font-size: 2em;
color: #009688;
`

list.style = `
list-style: none;
display: flex;
justify-content: space-between;
width: 260px;
`
// main 
let main = document.createElement('main');

let containerMain = document.createElement('container');

for (i = 1; i <= 15; i++) {
    let product = document.createElement('div');
    let productName = document.createElement('h1');
    productName.appendChild(document.createTextNode(i));
    let p = document.createElement('p');
    p.appendChild(document.createTextNode('Product'));
    // Append the product
    body.appendChild(main);
    main.appendChild(containerMain);
    containerMain.appendChild(product);
    product.appendChild(productName);
    product.appendChild(p);
    // Style the product
    product.style = `
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px ;
    flex-direction: column;
    `
    p.style.color = '#0000009c'
}

// Style the main
main.style = `
min-height: 830px;

`
containerMain.style = ` 
height: 100%;
width: 100%;
padding: 20px 130px;
/* display: flex; */
justify-content: 1 2 space-around;
display: grid;
/* grid-auto-columns: auto; */
grid-column: 1 2 3;
grid-template-columns: auto auto auto;
`
// Footer
let Footer = document.createElement('footer');
let P = document.createElement('p');
P.appendChild(document.createTextNode("copyright 2021"));
body.appendChild(Footer);
Footer.appendChild(P);

// Style the footer 
Footer.style = `
height: 84px;
background-color: #009688;
display: flex;
align-items: center;
justify-content: center;


`
P.style = `
color: #fff;
font-size: 2em;

`
