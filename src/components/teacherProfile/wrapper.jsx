const Wrapper = ({children, className}) => {
    return (
        <div className={`border-[1px] border-slate-200 border-solid rounded-lg p-4 bg-var(--profile-section-bg-color)] ${className}`}>
            {children}
        </div>
    )
}

export default Wrapper;