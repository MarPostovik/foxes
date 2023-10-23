import Logo from "../Logo/index.jsx";
import footerLogo from "./img/footer-logo.jpg";

const Footer = () => {
	return <footer className="main-footer">
		<Logo
			path={footerLogo}
			alt="Logo Footer"
		/>
	</footer>
}
export default Footer; 