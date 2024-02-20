const FormBody = ({ children, title, intro, ref, onSubmit }) => {
    return (
        <section className="p-5 py-28 z-10">
            <div className="max-w-[90vw] mx-auto w-[700px]">
                <h1 className="capitalize text-[40px] text-gradient font-bold">
                    {title}
                </h1>
                <p className="max-w-[64ch] text-[var(--secondary-text)]">{intro}</p>
                <form ref={ref} onSubmit={onSubmit} className="mt-[5vh] flex flex-col gap-4">
                    {children}
                    <button
                        type="submit"
                        className="text-white text-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-5 py-2.5 text-center mb-2"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </section>
    )
}

export default FormBody;