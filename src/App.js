import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center bg-dark"
        style={{ backgroundImage: 'url("https://www.shutterstock.com/image-photo/side-view-smart-handsome-adult-600nw-2240205649.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 d-flex flex-column align-items-center justify-content-center h-100 text-white text-center">
          <h1 className="display-4 font-weight-bold">
            Explore the World Together with Premium Travel
          </h1>
          <p className="mt-2 lead">Get up to 50% Discount</p>
          <button className="mt-4 btn btn-pink btn-lg rounded-pill">
            
          </button>
        </div>
      </header>

      {/* Flight Search */}
      <section className="py-5 bg-white shadow-md mt-n5 rounded-lg mx-5">
        <div className="container">
          <div className="d-flex justify-content-center mb-4">
            <button className="btn btn-pink text-white mr-3">
              Business Class
            </button>
            <button className="btn btn-outline-secondary text-dark">
              Book Now
            </button>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <button className="btn btn-pink text-white mr-3">
              Book Now
            </button>
          </div>
          <div className="mt-5 p-4 bg-light rounded-lg shadow-sm">
            <form className="d-flex flex-wrap justify-content-between">
              <input
                className="form-control mb-3 mb-md-0 w-25"
                type="text"
                placeholder="Departure City"
              />
              <input
                className="form-control mb-3 mb-md-0 w-25"
                type="text"
                placeholder="Arrival City"
              />
              <input
                className="form-control mb-3 mb-md-0 w-25"
                type="date"
              />
              <input
                className="form-control mb-3 mb-md-0 w-25"
                type="number"
                placeholder="Passengers"
              />
              <button className="btn btn-pink text-white btn-lg mb-3 mb-md-0">
                Search Flight
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center display-4 font-weight-bold mb-4">Business/First Class</h2>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-1">
                  <div className="bg-pink text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span>1</span>
                  </div>
                  <span className="ml-3">Search Flights</span>
                </li>
                <li className="d-flex align-items-center mb-4">
                  <div className="bg-pink text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span>2</span>
                  </div>
                  <span className="ml-3">Fill Contact Form</span>
                </li>
                <li className="d-flex align-items-center mb-4">
                  <div className="bg-pink text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span>3</span>
                  </div>
                  <span className="ml-3">Choose Your Airline</span>
                </li>
                <li className="d-flex align-items-center mb-4">
                  <div className="bg-pink text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span>4</span>
                  </div>
                  <span className="ml-3">Booking in 10 Minutes!</span>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="position-relative w-100" style={{ height: '300px' }}>
                <iframe
                  className="position-absolute inset-0 w-100 h-100"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="How it works"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <p>&copy; 2024 Travel App</p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <h5 className="font-weight-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled text-muted">
                <li>Submit Articles</li>
                <li>Blog</li>
                <li>Freebies</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <h5 className="font-weight-bold mb-3">Contact Us</h5>
              <p>123 Main Street, Los Angeles, CA</p>
              <p>(888) 123-4567</p>
              <div className="d-flex justify-content-start mt-4">
                <a href="#" className="text-muted mr-3">Facebook</a>
                <a href="#" className="text-muted mr-3">Twitter</a>
                <a href="#" className="text-muted">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
