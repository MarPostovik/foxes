import Logo from '../Logo'
import Nav from "../Nav";
import headerLogo from './img/logo.png';

const Header = () => {
	return <header className="main-header d-flex">
		<Logo
			path={headerLogo}
			alt="Logo Header"
		/>
		<Nav />
	</header>
}
export default Header;