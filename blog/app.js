let Header = () => {
    return <div className="header">
    
    <div className="logo">Logo</div>
    <ul><li>Home</li>
    <li>About</li>
    <li>Contact</li></ul></div>
}
let Article = () => {
    return <span> Write and design your blog article </span>
}
let Footer = () => {
    return (
<footer>
<ul className="footer">
<li>Home</li>
<li>about</li>
<li>contact</li>
</ul>
</footer>
    );
}

let Blog = () => {
    return <div>
    <Header/>
    <Article/>
    <Footer/>
    </div>
}


ReactDOM.render( <Blog /> , document.getElementById('root'))