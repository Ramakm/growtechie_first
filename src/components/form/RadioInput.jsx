const RadioInput = ({ data, handleChange, formData, classes }) => {
    return (
        <div className={`form-field text-black z-10 ${classes}`}>
            <p>{data.label} <span className="text-red-700">*</span></p>

            {data.values.map((item, idx) => (
                <div key={idx}>
                    <input
                        type="radio"
                        id={item}
                        name={data.name}
                        value={item}
                        checked={formData[data.name] === item}
                        onChange={handleChange}
                        className="focus:outline-none focus:bg-white"
                        required
                    />
                    <label htmlFor={item} className="ml-2">{item}</label>
                    <br />
                </div>
            ))}

        </div>
    )
}

export default RadioInput;