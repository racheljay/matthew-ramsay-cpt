import React from 'react';

function About() {
    return (
        <div className="container pt-5">
            <div className="row pt-3">
                <div className="col-4 col-lg-5">
                    <img src="img/yogaunsplash600px.jpg"
                    alt=""
                    id="yoga-pic"
                    className="d-none d-lg-block"
                    />
                </div>

                <div className="col-lg-7">
            <h1>About Matthew</h1>

                    <p>
                        A certified personal trainer with almost a decade of professional experience. He completed a comprehensive and rigorous certification training through Lexington Healing Arts Academy in 2011. After graduation he began personal training in earnest. He is an avid learner of everything to do with biomechanics. He is a scholar of the human body and how it is designed to move. He maintains his certification of personal training through the professional organization, the National Strength and Conditioning Association <a href="https://www.nsca.com/" target="_blank">(NSCA)</a>. He has helped hundreds of individuals improve their quality of life; regain mobility and strength; and enhance physical, occupational, and recreational skills. Red Cross certified in first aid and CPR/AED
            </p>
                    <h3>Training Specialties:</h3>
                    <p>
                        Recovery after injuries (recent, old, or chronic), strengthening after orthopedic surgeries including joint-replacements, <a href="http://fitplusinc.com/services/strong-over-50/" target="_blank">Strong Over 50</a>, and virtual in-home training (link to section about virtual training).
                    </p>
                </div>
            </div>

            <div className="row mt-3">
                <h5 className="col-12 text-center">
                    His passions include working, eating and everything to do with his cats Raz and Lili. 😸
                </h5>
                <div className="col-md-6">
                    <div className="card">

                <img className="card-img-top" src="img/catcouch600px.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">

                    <img className="card-img-top" src="img/fruitflip600px.jpg" alt=""/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About