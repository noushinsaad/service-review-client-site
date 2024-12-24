const ErrorPages = () => {
    return (
        <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
            {/* <Helmet>
                <title>{title || "Error | MovieNest"}</title>
            </Helmet> */}

            <h1 className="text-7xl font-semibold">404</h1>
            <h2 className="text-5xl">Error</h2>
            <p className="text-3xl">Page not found</p>
        </div>
    );
};

export default ErrorPages;