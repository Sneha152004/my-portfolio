function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");


  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");


    // Call showPopup here
    showPopup(true);


    // Create a new 'recommendation' element and set its value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";


    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);


    // Reset the value of the textarea
    recommendation.value = "";
  }
}


function showPopup(bool) {
  const popup = document.getElementById('popup');
  if (bool) {
    popup.innerHTML = `
      <div style="text-align: center;">
        <div style="font-size: 2rem;">✔️</div>
        <p><strong>Thanks for leaving a recommendation!</strong></p>
        <button onclick="showPopup(false)" style="padding: 10px 20px; font-size: 1rem; color: purple; border: 2px solid purple; background: white; border-radius: 5px;">Ok</button>
      </div>
    `;
    popup.style.visibility = 'visible';
  } else {
    popup.style.visibility = 'hidden';
  }
}
