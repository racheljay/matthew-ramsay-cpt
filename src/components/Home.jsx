import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container">

            <div className="jumbotron">
                <h1 className="display-4">Matthew Ramsay</h1>
                <p className="lead">NSCA-CPT</p>
                <hr className="my-4" />
                <p>Contracted Personal Trainer at Fitness Plus in Lexington, Kentucky</p>
                <p className="lead">
                    <a href="http://fitplusinc.com/" className="btn btn-success btn-lg" target="_blank" role="button">Learn more</a>
                </p>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="img/renfaire800px.jpg" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4>My mission as a trainer is to help each person, from first time exercisers to seasoned gym veterans, exceed their own expectations and live as healthily and pain-free as possible.</h4>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src="img/blurryropes800px.jpg" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4>Specializing in recover aftery injuries (recent, old, or chronic) strengthening after orthopedic surgeries including joint-replacements. Strong Over 50, and virtual in-home training.</h4>
                        </div>
                    </div>

                    {/* <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Third slide" />
                    </div> */}

                </div>

                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}

export default Home