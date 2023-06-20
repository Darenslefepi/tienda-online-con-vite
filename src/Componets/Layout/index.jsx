const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center mt-20">{/* mt es el margen */}
            { children }
        </div>
    )
}

export default Layout