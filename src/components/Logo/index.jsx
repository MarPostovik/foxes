const Logo = ({ path, alt }) => {
	return <div className="logo">
		<a href="/">
			<img src={path} alt={alt} />
		</a>
	</div>;
}
export default Logo;