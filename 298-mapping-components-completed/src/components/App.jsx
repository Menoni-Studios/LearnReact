import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";
import Details from "./Details";

/*
👉Pro tip. When trying to make a Comment in Jsx.
 ⚠️Out side teh App is I have to use nomrla syntax for comments.
 ⚠️Inside the App I have to use the {} before the syntax to make it work.
 */
//➡️This function will go over all the elements of the [contants] and will render them
//The name inside the function x is just a placehoder for one element a the time for each elements.
//If I put the name of the [] contacts, this will reander all the elements causing error.
/*
Key ID:
➡️A warning appears in the console: "Each child in a list should have a unique 'key' property." This warning persists even after refreshing the browser, indicating a real issue rather than a CodeSandbox glitch.

➡️This warning is important. React uses a virtual DOM to represent the current appearance of your website. To efficiently render components created in a loop such as with map(), each component must have a unique key prop.

➡️Luckily, our contacts.js objects have a unique id property. We use this as the key prop by setting key={contact.id} on each Card component. This resolves the warning as we conform to React's rules.
*/

function createCard(x) {
  return (
    <Card
      key={x.id}
      name={x.name}
      img={x.imgURL}
      tel={x.phone}
      email={x.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      
      {/*This is my Avatar img*/}
       <Avatar img="https://media.licdn.com/dms/image/v2/C5603AQFv64PlKPlE3Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1642769148213?e=1762387200&v=beta&t=b53q0tFPRgKe2sc8G0Knph4RywZbyDHNqTSlnCHkfIc" />
      <Details tel="Tel: 123456789" email="Email: TheChoicenOne@hotmai.com" />
      
     {/*
➡️The FUNCTION MAP is use to loop over[ ]and extract values or do someting with the values.
➡️will accept another function.
➡️It creates a new array by applying a function to each element of the original array.
➡️It does not modify the original array.
➡️It’s ideal for data transformation — like converting values, extracting properties, or formatting data.
*/}

      {/*Here is just put like this the {} and contacts that is the constan that have the [] dot map and 
inide map call the function created before*/}  
      {contacts.map(createCard)}

      {/* This was the old aproach with out using MAP.
      
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
