import "./loader.css"

const Loader = () => {
    return (
        <span className="loader"></span>
    )
}

const FullScreenLoader = ({text}) => {
    return (
        <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.6)] flex flex-col justify-center items-center">
            <div className="w-20 h-20 mr-16">
                <Loader />
            </div>
            <p className="text-[var(--primary-text)] text-lg">{text}</p>
        </div>
    )
}

export default Loader;
export { FullScreenLoader };