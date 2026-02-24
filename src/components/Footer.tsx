const Footer = () => {
    return (
        <footer className="px-4 md:px-5 lg:px-10">
            <div className="flex justify-between items-center px-5 py-5">
            <div className="flex items-center gap-25">
                    <img src="logo.svg" alt="Logo" className="h-6" />
                    <p className="text-white text-xs">
                        2026 Terminal Learning Ltd.
                    </p>
                </div>

                 <div className="flex items-center gap-10">
                    <p className="text-white text-xs cursor-pointer hover:underline">
                        Privacy
                    </p>
                    <p className="text-white text-xs cursor-pointer hover:underline">
                        Terms
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;