import React from "react";

function PizzaForm({ selectedPizza, onChangeForm, onSubmitForm }) {
  
  if (!selectedPizza) return null
  const { topping, size, vegetarian } = selectedPizza

  const handleChangeInput = (event) => {
    onChangeForm(event.target.name, event.target.value)
  }

  const handleChangeRadio = (event) => {
    onChangeForm(event.target.name, event.target.value === "Vegetarian")
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={handleChangeInput}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={handleChangeRadio}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleChangeRadio}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
