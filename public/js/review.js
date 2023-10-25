const submitbtn = document.getElementById("reviewsubmit");
const nameEl = document.getElementById("name");
const email = document.getElementById("email");
const review = document.getElementById("review");
const contact = document.getElementById("contact");

submitbtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const nameValue = nameEl.value;
  const emailValue = email.value;
  const reviewValue = review.value;
  const contactValue = contact.value;
  const reviewData = {
    name: nameValue,
    email: emailValue,
    review: reviewValue,
    contact: contactValue,
  };

  const response = await fetch("/review", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reviewData),
  });
  const data = await response.json();
  console.log(data);
  if (response.status === 201) {
    alert("Your review has been submitted successfully");
    location.href = "/";
  } else {
    alert("Your review has not been submitted successfully");
  }
});
