import {listManu} from './nav-list';

/* -------------------
* Get all menu items
* ----------------- */
const menuItems = listManu.map((menu, index) => {
	return <li key={index} className="main-menu__item">
		<a href={menu.link}>{menu.title}</a>
	</li>;
});

/* -------------------
* Render main menu
* ----------------- */
const Nav = () => {
	return <nav className="main-menu">
		<ul className="main-menu__list d-flex">
			{menuItems}
		</ul>
	</nav>;
}
export default Nav;