const TextInput = ({ data, formData, handleChange }) => {
  return (
    <div className="form-field z-10 text-black font-base">
      <label htmlFor={data.name}>
        {data.label}{" "}
        {data.frequency && (
            <span className="text-sm font-bold text-slate-400">({data.frequency})</span>
        )}
        {data.optional ? (
          <span>(Optional)</span>
        ) : (
          <span className="text-red-700">*</span>
        )}
      </label>
      <input
        type={data.type || "text"}
        id={data.name}
        name={data.name}
        value={formData[data.name]}
        onChange={handleChange}
        maxLength={150}
        className="border-b-[2px] bg-transparent pl-3 border-solid border-slate-300 focus:outline-none"
        required={!data.optional}
      />
    </div>
  );
};

export default TextInput;
