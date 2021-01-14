import React from 'react';

function Contact() {
    return (
        <div className="container pt-5">

            <h1 className="text-center pt-3">No memberships. No Contracts.</h1>
            <hr />
            <div className="row">
            <div className="col-xl-2"></div>
            <h3 className="text-center p-2 col-xl-8">Interested in personal training? Contact me to schedule your complimentary consultation session.</h3>
            <div className="col-xl-2"></div>
            </div>
            <h3 className="text-center pt-3 pb-3"><a href="mailto:ramsayfitness@gmail.com" target="_blank">ramsayfitness@gmail.com</a></h3>

            <h3 className="pt-3 pb-3 text-center">
                I offer 30-minute and/or 1-hour sessions weekly in two forms:
            </h3>
            
            <div className="row">
            <div className="col-xl-2"></div>

            <div className="col-xl-8">

                <ol>
                    <li>In person training at Fitness Plus. The facility is located at 831 National Avenue, Lexington, KY 40502</li>
                    <li>Virtual training over video conferencing platforms such as Zoom, Google Duo, Google Meets, and Skype</li>
                </ol>
            </div>
            <div className="col-xl-2"></div>

            </div>
            
        </div>
    )
}

export default Contact