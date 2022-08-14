document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(pups => {
        pups.forEach((dog) => renderDogs(dog))
    })


    function renderDogs(dog) {
        const container = document.querySelector('#dog-bar');
        const span = document.createElement('span');
        span.textContent = dog.name;
        container.append(span);

        span.addEventListener('click', (e) => {
            const dogInfo = document.querySelector('#dog-info');
            let img = document.createElement('img');
            img.src = dog.image;
            let h2 = document.createElement('h2');
            h2.textContent = dog.name;
            let button = document.createElement('button');

            if (dog.isGoodDog) {
                button.innerText = "Good Dog!"
            } else {
                button.innerText = "Bad Dog!"
            }
            dogInfo.innerText = ""; // clears out dogInfo div between clicks

            dogInfo.append(img, h2, button);

        button.addEventListener('click', (e) => {
            if (button.innerText === "Good Dog!") {
                button.innerText = "Bad Dog!" 
                dog.isGoodDog = false;
            } else if (button.innerText = "Bad Dog!") {
                    button.innerText = "Good Dog!"
                    dog.isGoodDog = true;
                }
                console.log(dog) // checking to see if the status changes on click
                patchDogs(dog) // call patch function to change isGoodDog status

    
        })
        })

    } // end of renderDogs function

    function patchDogs(dog) {  
        fetch('http://localhost:3000/pups/' + dog.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isGoodDog: dog.isGoodDog
            })
        })
            .then(res => res.json())
    } // end of patchDogs function


    function filterDogs

}) // end of DOMContentLoaded


// When a user clicks on the Filter Good Dogs button, two things should happen:
// >create variable for 'good-dog-filter' button
// >'click' event listener

// The button's text should change from "Filter good dogs: OFF" to "Filter good dogs: ON", or vice versa.
// if condition for innerText





// If the button now says "ON" (meaning the filter is on), then the Dog Bar should only show pups whose isGoodDog attribute is true. If the filter is off, the Dog Bar should show all pups (like normal).