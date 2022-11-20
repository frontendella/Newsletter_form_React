
import './App.css';
import { useState } from 'react'

function App() {

  const [enteredData, setEnteredData] =
    useState({
      email: "",
      password: "",
      passwordConfirmation: "",
      okayToEmail: false
    })




  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setEnteredData(prevEnteredData => ({
      ...prevEnteredData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    enteredData.password === enteredData.passwordConfirmation
      ? console.log("Successfully signed up") &&
      enteredData.okayToEmail && console.log("Thanks for signing up for our newsletter!")
      : console.log("Passwords to not match")
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          onChange={handleChange}
          name="email"
          value={enteredData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          onChange={handleChange}
          name="password"
          value={enteredData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          onChange={handleChange}
          name="passwordConfirmation"
          value={enteredData.passwordConfirmation}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            onChange={handleChange}
            name="okayToEmail"
            checked={enteredData.okayToEmail}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form--submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}

export default App;
