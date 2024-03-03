const Wrapper = ({children, className}) => {
    return (
        <div className={`${className} border-[1px] white-box-shadow border-slate-200 border-solid rounded-lg p-6 radial-shiny-gray-gradient`}>
            {children}
        </div>
    )
}

export default Wrapper;