const Wrapper = ({children, className}) => {
    return (
        <div className={`${className} border-[1px] border-slate-200 border-solid rounded-lg p-6 bg-[var(--profile-section-bg-color)]`}>
            {children}
        </div>
    )
}

export default Wrapper;