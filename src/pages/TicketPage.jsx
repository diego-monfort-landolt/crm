import { useState } from "react";

const TicketPage = () => {
  const [formData, setFormData] = useState({
    status: 'not Started',
    progress: 0,
    timestamp: new Date().toISOString()
  })

  const editMode = false;

  const handleSubmit = () => {
    console.log('submitted')
  }

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setFormData((prevState) => ({
      ...prevState,
      [name]: value

    })
    )
  }
  console.log(formData)

  return (
    <div className="ticket">
      <h1>{editMode ? 'Update your Ticket' : 'Create a Ticket!'}</h1>
      <div className="ticket-container" >
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />

            <label htmlFor="description">Description</label>
            <input
              id="description"
              type="text"
              name="description"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />

            <label htmlFor="new-category">New Categoryn</label>
            <input
              id="new-category"
              type="text"
              name="category"
              onChange={handleChange}
              required={true}
              value={formData.category}
            />

          </section>
        </form>
      </div>
    </div>
  )
}

export default TicketPage