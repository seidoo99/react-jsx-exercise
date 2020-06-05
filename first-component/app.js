let FirstComponent = () => {
    // return <span> Make this component render like the Windows Logo: <a href = "https://goo.gl/images/mY5Qdv"
    // target = "_blank" > https: //goo.gl/images/mY5Qdv</a></span>
    <div className='windows_logo'>
			<div style={{ backgroundColor: '#F36523' }}></div>
			<div style={{ backgroundColor: '#8DC73F' }}></div>
			<div style={{ backgroundColor: '#00ADEF' }}></div>
			<div style={{ backgroundColor: '#FFC20F' }}></div>
    	</div>
}


ReactDOM.render( < FirstComponent / > , document.getElementById('root'))