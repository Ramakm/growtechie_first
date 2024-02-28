const TextInput = ({ data, formData, handleChange }) => {
    return (
        <div className="form-field bg-white z-10">
            <label htmlFor={data.name}>
                {data.label}
                {data.optional? <span>{" "}(Optional)</span> : <span className="text-red-700">*</span>}
            </label>
            <input
                type={data.type || "text"}
                id={data.name}
                name={data.name}
                value={formData[data.name]}
                onChange={handleChange}
                maxLength={150}
                className="border-b-[1px] border-solid border-gray-300 focus:outline-none"
                required={!data.optional}
            />
        </div>
    )
}


export default TextInput;