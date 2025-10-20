import React from "react";
import Card from "./card";
/*
In <Card /> I wil add the ids/properties;
->In <Card /> I will put the info that is specific. But with a twist.
  ->I will add like and id/properties(name, img, phone, email)
    ->And inside of them I will put the specific info. #
      ->Later I can tap in this ids/properties through props, call them and show them.
->I can add as many <Card /> as I want. In this case I have 3.
*/
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce" //Here does not need ; or , just leve with nothing.
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        phone="+918 372 574"
        email="gmail@chucknorris.com"
      />
    </div>
  );
}
export default App;
