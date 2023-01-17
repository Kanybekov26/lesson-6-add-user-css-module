import { useState } from "react";
import "./App.css";
import AgeForm from "./components/ageform/AgeForm";
import NewAgeForm from "./components/newageform/NewAgeForm";


 
function App() {
  const [yearUser,setYearUser] = useState( [
    {
      name: "Feruza",
      age: 19,
    },
    {
    name: "Bayaman",
    age: 90,
  },
  {
    name: "Nurbolot",
    age: 25,
  },
  {
    name: "Zhumabek",
    age: 24,
  },
  {
    name: "Zhasmina",
    age: 22,
  },
  
  ])

  yearUser.sort((a,b) => {
  return  b.age-a.age
  })

  
  const newyearuser = (ageuser) => {
    console.log(ageuser);
    const copiyearUser = [...yearUser] 
    copiyearUser.push(ageuser)
    setYearUser(copiyearUser)

  }
  return (
    <div className="App">
      <NewAgeForm 
      newyearuser={newyearuser}
      />
      <AgeForm 
      yearuser={yearUser}
      />
    </div>
  );
}

export default App;
