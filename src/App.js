import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div>
    <div className="container">
		<div className="row nav-row">
			<nav className="navbar navbar-light bg-light">
                <a className="navbar-brand HO-logo" href="#">
                    <img src="https://horizonsoffices.com/images/hr/logo.png" width="150" height="50" className="d-inline-block align-top" alt="Horizons Office Logo"/>
                </a>
            </nav>


            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand Flag1" href="#">
                    <img src="https://media.istockphoto.com/photos/ghana-flag-picture-id471793389?b=1&k=20&m=471793389&s=170667a&w=0&h=FwOrTLiNJX3GAnb80fr2M3tMchQ8KRhxHMkQxpDoCWY=" width="20" height="15" alt="Ghana Flag"/>
                </a>
            </nav>


            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand Flag2" href="#">
                    <img src="https://media.istockphoto.com/photos/nigeria-flag-picture-id471793397?b=1&k=20&m=471793397&s=170667a&w=0&h=6jAghePLCOCTmIYvaNJZsGKr0wgzuP0SbDzyeHg-X6s=" width="20" height="15" alt="Nigeria Flag"/>
                </a>
            </nav>


            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand Flag" href="#">
                    <img src="https://media.istockphoto.com/photos/highly-detailed-flag-of-kenya-kenya-flag-high-detail-national-flag-picture-id1309828548?b=1&k=20&m=1309828548&s=170667a&w=0&h=2V7QuuhilEUUoanYnWpp5dF3q_x0nJuZ72p1x-Pqs64=" width="20" height="15" alt="Kenya Flag"/>
                </a>
            </nav>


            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link About">ABOUT US</a>
                </li>
            </ul>

		</div>
	</div>

	<div className="container-fluid">
		<div className="row">
			<div className="col-md-12">
			<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwc3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" className="d-block w-100" alt="Office 1" width="100" height="400"/>
                    </div>
    
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1631193816258-28b44b21e78b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="d-block w-100" alt="Office 2" width="100" height="400"/>
                    </div>
    
                    <div className="carousel-item ">
                        <img src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="d-block w-100" alt="Office 3" width="100" height="400"/>
                    </div>
                </div>
  
               <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </div>
		</div>
	</div>

	<div className="container">
		<div className="row">
			<p className="text-row">PLANS</p>
		</div>

		<div className="row">
			<div className="card-deck">
                <div className="card">
                    <img src="https://media.istockphoto.com/photos/empty-coworking-office-picture-id1305552760?b=1&k=20&m=1305552760&s=170667a&w=0&h=3Hhs4ITRmy7ObFHucsU4qB3Ic1itDL2wa20pzItbkvw=" className="card-img-top" alt="Virtual Offices"/>
                    <div className="card-body">
                        <h5 className="card-title">VIRTUAL OFFICES</h5>
                        <p className="card-text thumbnail">Our virtual offices allow your business to get our location address, phone services and also you become a member of our community with benefits such as access to our meeting rooms.</p>
                    </div>
                </div>

                <div className="card">
                    <img src="https://images.unsplash.com/photo-1570126688035-1e6adbd61053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpcnR1YWwlMjBvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" className="card-img-top Img1" alt="Customized Offices"/>
                    <div className="card-body">
                        <h5 className="card-title">CUSTOMIZED OFFICES</h5>
                        <p className="card-text thumbnail"> Our customized offices offer a great location for your business and you can customize your office to suit your preferences. Also, you become a member of our community with benefits such as access to our meeting rooms.</p>
                    </div>
                </div>
   
                <div className="card">
                    <img src="https://media.istockphoto.com/photos/view-of-empty-office-picture-id519053211?b=1&k=20&m=519053211&s=170667a&w=0&h=sT7Ir2HlxrWkdnSBzs3RBy_NiAlv9T0geDKO7Ee84j8=" className="card-img-top Img2" alt="Serviced Offices"/>
                    <div className="card-body">
                        <h5 className="card-title">SERVICED OFFICES</h5>
                        <p className="card-text thumbnail">Our serviced offices offer a great location for your business and we provide services such as internet, utilities and offers from our partners. Also you become a member of our community with benefits such as access tour meeting rooms.</p>
                    </div>
                </div>

                <div className="card">
                    <img src="https://images.unsplash.com/photo-1610374792793-f016b77ca51a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlydHVhbCUyMG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top Img3" alt="Meeting Rooms"/>
                    <div className="card-body">
                        <h5 className="card-title">MEETING ROOMS</h5>
                        <p className="card-text thumbnail">Our meeting rooms offer a great location for your meeting with your clients or business partners. We provide presentation equipment and coffee. Also you become a member of our community with benefits such as access to our meeting rooms.</p>
                    </div>
                </div>

            </div>
		</div>
	</div>

	<div className="container footer">
		<div className="row">
			<div className="col-md-4">
				<div className="card-body">
                        <h5 className="card-title">VISIT US IN KENYA</h5>
                        <h6 className="card-text">Nairobi,Kenya</h6>
                        <p className="card-text">Belgravia Centre, 14 Riverside drive, <br/> 4th floor, Off Riverside Drive, <br/> 6th floor, Off Riverside Drive</p>
                    </div>
			</div>

			<div className="col-md-4">
				<div className="card-body">
                        <h5 className="card-title">VISIT US IN GHANA</h5>
                        <h6 className="card-text">Accra,Ghana</h6>
                        <p className="card-text">One Airport Square, Airport City <br/> 8th Floor</p>
                    </div>
			</div>

			<div className="col-md-4">
				<div className="card-body">
                        <h5 className="card-title">VISIT US IN NIGERIA</h5>
                        <h6 className="card-text">Lagos,Nigeria</h6>
                        <p className="card-text">Sterling Bank Building</p>
                    </div>
			</div>
		</div>
	</div>

</div>
  );
}

export default App;
