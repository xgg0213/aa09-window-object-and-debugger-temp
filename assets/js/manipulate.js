export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here 
    document.title = "Erin's Portfolio";
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here 
    const h1 = document.querySelector('#header > h1');
    h1.innerText = 'Erin Gan';
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here 
    const p = document.querySelector('.section > h2+p');
    p.innerText = 'Hello I like baking and reading'
}
