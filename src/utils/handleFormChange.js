function handleFormChange(event, setFormData) {
    setFormData(prevFormData => ({
        ...prevFormData,
        [event.target.name]: event.target.value
    }))
}

export default handleFormChange;