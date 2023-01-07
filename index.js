const element = (
  <div class="bg-container">
    <h1 className="heading">Congragulations</h1>
    <div class="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-img"
      />
      <h1 className="heading-2">Kiran V</h1>
      <p className="para">
        Vishnu institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
