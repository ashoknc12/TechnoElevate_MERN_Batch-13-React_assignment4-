import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

export default function Home() {
    return (
        <div>
            <div  id="carouselExampleControls" className="carousel slide  " data-ride="carousel">
                <div className="carousel-inner ">
                    <div className="  carousel-item active ">
                    <img  src="https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/COVID19_Vaccine_1200x666.jpg?itok=GhLGSplX" className=" d-block w-100  " alt="..."/>
                    </div>
                    <div className="  carousel-item ">
                    <img  src="https://www.mohfw.gov.in/covid_vaccination/vaccination/dist/images/banner-5.png" className="  d-block w-100 " alt="..."/>
                    </div>
                    <div className="  carousel-item ">
                    <img  src="https://img.etimg.com/thumb/msid-79924014,width-1200,height-1200,imgsize-388327,overlay-etpanache/photo.jpg" className="  d-block w-100 " alt="..."/>
                    </div>
                    <div className="  carousel-item ">
                    <img  src="https://vaccine.icmr.org.in/images/team/Covxin.png" className="  d-block w-100 " alt="..."/>
                    </div>
                    
                </div>
                <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </Link>
                <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </Link>
            </div>
            <div className="container">
                <p>COVAXIN®, India's indigenous COVID-19 vaccine by Bharat Biotech is developed in collaboration with the Indian Council of Medical Research (ICMR) - National Institute of Virology (NIV).

The indigenous, inactivated vaccine is developed and manufactured in Bharat Biotech's BSL-3 (Bio-Safety Level 3) high containment facility.

The vaccine is developed using Whole-Virion Inactivated Vero Cell derived platform technology. Inactivated vaccines do not replicate and are therefore unlikely to revert and cause pathological effects.
 They contain dead virus, incapable of infecting people but still able to instruct the immune system to mount a defensive reaction against an infection.

Why develop Inactivated Vaccine? Conventionally, inactivated vaccines have been around for decades. Numerous vaccines for diseases such as Seasonal Influenza, Polio,
 Pertussis, Rabies, and Japanese Encephalitis use the same technology to develop inactivated vaccines with a safe track record of 300 million doses of supplies to date. It is the well-established, and time-tested platform in the world of vaccine technology..</p>
                <p>Today marks the start of the World Immunization Week. The COVID-19 pandemic, while draws the world’s attention to the vaccine, also reminds us of the importance of immunization, which saves millions of lives each year.

WHO is working with partners all over the world to accelerate research and development of a safe and effective vaccine and ensure equitable access for the billions of people who will need it.
 But even with an expedited process, development of a vaccine for COVID-19 will take time. 

The ongoing pandemic disrupts routine immunization services in many countries. When immunization services are disrupted, even for brief periods during emergencies, the risk of vaccine-preventable disease outbreaks, such as measles and polio, increase.
 Further disease outbreaks will also overwhelm health systems already battling the impacts of COVID-19.

WHO continues to support countries to maintain essential immunization for all vaccine preventable diseases. We issued guidance on immunization services during the COVID-19 pandemic,
 which provides guiding principles and considerations to support countries in their decision-making regarding provision of immunization services during the COVID-19 pandemic.</p>
            </div>
        </div>
    )
}