import React, { useState} from 'react'
import Form from './Form/Form'
import List from './List/List'
import './App.css'


export default function Component() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [submittedData, setSubmittedData] = useState([])

  const createData = (name, age) => {
    const newData = { name, age }
    setSubmittedData([...submittedData, newData])
    setName('')
    setAge('')
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    createData(name, age)
  }

  return (
    <div className="form-container">
      <h2>Personal Information</h2>
      <Form
        name={name}
        age={age}
        setName={setName}
        setAge={setAge}
        handleSubmit={handleSubmit}
      />
      {submittedData && <List submittedData={submittedData} />}
    </div>
  )
}