function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form_message")

    messageElement.textContent = message;
    messageElement.classList.remove("form_message_error", "form_message_success");
    messageElement.classList.add("form_message_${type}");

}

function setInputError(formElement, type, message){
    const messageElement = formElement.querySelector(".form_message")

    messageElement.textContent = message;
    messageElement.classList.remove("form_message_error", "form_message_success");
    messageElement.classList.add("form_message_${type}");

}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form_hidden");
        createAccountForm.classList.remove("form_hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form_hidden");
        createAccountForm.classList.add("form_hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // add behaviour, either error or success message by passing setFormMessage function
    })

});