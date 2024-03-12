function handleFormChange(event, setFormData) {
    if(event.target.type === "file") {
        setFormData(prevFormData => ({
            ...prevFormData,
          [event.target.name]: event.target.files[0],
        }));
    } else {
        setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }))
    }
}

export default handleFormChange;