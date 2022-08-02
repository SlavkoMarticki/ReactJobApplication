import React from "react";
import "../css/form.css"


export default function Form(){
    const [userInfo, setUserInfo] = React.useState(
        [
          {id: "firstName", value:""},
          {id: "lastName", value: ""},
          {id: "email", value:""},
          {id: "description", value: ""},
          {id: "familiarTehnologies", value: []},
          {id: "workInIT: false", value:""},
          {id: "position", value: ""}
        ]  
      );

    const takeValue = (event) => {
        
        const {name} = event.target;
        const inputValue = event.target.value;
        console.log(name);
        console.log(inputValue);
        for (let i = 0; i < userInfo.length; i++) {
            if(userInfo[i].id === name){
                setUserInfo(userInfo[i].value = inputValue);
                break;
            }
        }
    }

       

      
  

   

    return(
        <div className="formHolder">
            <form>
                <label htmlFor="name">Name: </label>
                <input onChange={takeValue} name="firstName"type="text"id="name"/> <br />

                <label htmlFor="lastName">Last Name:</label>
                <input onChange={takeValue} name="lastName"type="text"id="lastName"/> <br />

                <label htmlFor="email">Email: </label>
                <input onChange={takeValue} name="email"type="email"id="email"/> <br /> <br />
               
                <label htmlFor="describe">Describe yourself: </label> <br />
                <textarea onChange={takeValue} name="description"type="describe" id="email"/> <br />

             

                <p>which of these technologies are you familiar with?</p>     
                <input onChange={takeValue} type="checkbox" id="html" />
                <label htmlFor="html">HTML</label> <br />
                
                <input onChange={takeValue} type="checkbox" id="css" />
                <label htmlFor="css">CSS</label> <br />

                <input onChange={takeValue} type="checkbox" id="js" />
                <label htmlFor="js">JS</label><br />

                <p>Have you ever  work in IT industry</p>
                <input onChange={takeValue} type="radio" id="vehicle1" name="work" value="yes" />
                <label htmlFor="vehicle1">Yes</label><br />

                <input onChange={takeValue} type="radio" id="vehicle2" name="work" value="no" />
                <label htmlFor="vehicle2">No</label> <br />

                <p>Choose position:</p>
                <select name="position" id="cars" onChange={takeValue}>
                    <option selected disabled>Choose</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                </select> <br />
           
                <div className="buttonHolder">
                    <button type="button">Send aplication</button>
                </div>
                
                
              
            </form>
        </div>
    );
}