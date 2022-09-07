const Footer = () => {
    return (
        <div>

            <footer>
                <nav>
                    <ul><a href='https://github.com/kwaale' rel='noopener noreferrer'>Github</a></ul>
                </nav>
                <p>Copyright Knut Waale</p>
            </footer><br />
            <footer className="bg-dark text-center text-white">
                <div className="container p-4">
                    <section className="mb-0">
                        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/kwaale" role="button"
                        ><i className="fab fa-facebook-f">Github</i></a>
                    </section>
                </div>

                <div className="text-center p-3">
                    © 2020 Copyright:                    
                </div>
            </footer>

        </div>
    )
}
export default Footer;