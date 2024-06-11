let database = firebase.database();
const submitBtn = document.getElementById("submit");
const sentAlert = document.getElementById("sentAlert");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const message = document.getElementById("message");
let userId = crypto.randomUUID();
// Function to write user data
function writeUserData(userId, firstName, lastName,email,phoneNumber,Message) {
    database.ref('users/' + userId).set({
        userName:[firstName + " " + lastName],
        phoneNumber:phoneNumber,
        email:email,
        message:Message
    }, (error) => {
        if (error) {
            console.log(error);
        } else {
            sentAlert.classList.remove("text-muted");
            sentAlert.classList.add("text-success");
            sentAlert.innerHTML = "Message sent, I'll get back to you as soon as possible.";
        }
    });
    document.getElementById("contactForm").reset();

}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    writeUserData(userId, firstName.value, lastName.value,email.value,phoneNumber.value,message.value);
});

