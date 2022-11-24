console.log("Hello World")

const updateSimplify = () => {

    let updateTitle = document.querySelector('h3').innerHTML;
    let updateSubTitle = document.querySelector('h4').innerHTML;
    let updateParagraphe = document.querySelector('.update-text').innerHTML;

    console.log(updateTitle);
    console.log(updateSubTitle);
    console.log(updateParagraphe);
}

// Java Script form//

const contactForm = (preventForm) => {
    preventForm.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#cell").value;
    let textarea = document.querySelector("#field").value;
    
    
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "text/plain, application/json",
      },
        body: JSON.stringify({
            name: name,
            email: email,
            cell: phone,
            field: textarea,
        }),
    })
      .then((response) => response.json())
      .then((formData) => console.log(formData))
      .catch((error) => console.log(error));
  };
  document.querySelector('form').addEventListener("submit", contactForm);




