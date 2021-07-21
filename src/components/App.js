import React, { useState, useEffect } from "react"
import Header from "./Header"
import PizzaForm from "./PizzaForm"
import PizzaList from "./PizzaList"

function App() {
  const [pizzas, setPizzas] = useState([])
  const [selectedPizza, setSelectedPizza] = useState(null)

  const pizzasUrl = "http://localhost:3001/pizzas"

  useEffect(() => {
    fetch(pizzasUrl)
      .then(resp => resp.json())
      .then(data => {
        setPizzas(data)
      })
  }, [])

  const handleChangeForm = (key, value) => {
    setSelectedPizza({...selectedPizza, [key]: value})
  }

  const handleSubmitForm = () => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(selectedPizza)
    }
    fetch(`${pizzasUrl}/${selectedPizza.id}`, configObj)
      .then(resp => resp.json())
      .then(data => {
        const updatedPizzas = pizzas.map(pizza => {
          if (pizza.id === selectedPizza.id) return data
          return pizza
        })
        setPizzas(updatedPizzas)
        setSelectedPizza(data)
      })
  }

  return (
    <>
      <Header />
      <PizzaForm 
      selectedPizza={selectedPizza}
      onChangeForm={handleChangeForm}
      onSubmitForm={handleSubmitForm}
      />
      <PizzaList pizzas={pizzas} onClickEditPizza={setSelectedPizza} />
    </>
  );
}

export default App
