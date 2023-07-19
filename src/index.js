import React from "react";
import { createRoot } from "react-dom/client";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="dummy" />
      <p>{props.email}</p>
      <p>{props.tel}</p>
    </div>
  );
}
const myElement = (
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Kelya Dumas"
      img="https://randomuser.me/api/portraits/men/75.jpg"
      alt="dummyalt"
      email="kelya.dumas@example.com"
      tel="+123 1234 123"
    />
    <Card
      name="Shivaraj"
      img="https://randomuser.me/api/portraits/men/77.jpg"
      alt="dummyalt"
      email="shivaraj@example.com"
      tel="9632 485 655"
    />
    <Card
      name="Arya"
      img="https://randomuser.me/api/portraits/men/79.jpg"
      alt="dummyalt"
      email="arya@example.com"
      tel="9741 314 326"
    />
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(myElement);

{
  /* <h2>Kelya Dumas</h2>
<img src="https://randomuser.me/api/portraits/men/75.jpg" alt="dummy" />
<p>+123 1234 120</p>
<p>kelya.dumas@example.com</p>

<h2>Shivaraj</h2>
<img src="https://randomuser.me/api/portraits/men/77.jpg" alt="dummy" />
<p>9416252844</p>
<p>shivaraj@example.com</p>

<h2>Arya</h2>
<img src="https://randomuser.me/api/portraits/men/79.jpg" alt="dummy" />
<p>8566581620</p>
<p>arya@example.com</p> */
}
