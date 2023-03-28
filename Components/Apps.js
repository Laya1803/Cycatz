import React from 'react';

function Apps() {
    return (
        <div className='main'>
            
            <nav className='navbar_btn'>
            <div className='logo'>
                    <img src='https://ssmce.ac.in/new/images/ssmlogo.png'></img>
                 </div>
                <ul className='lists'>
                 <li className='list'><a href='https://www.ssmiet.ac.in/about-principal/' target={'_blank'}>about</a></li>
                 <li className='list'><a href='https://www.ssmiet.ac.in/admission/' target={'_blank'}>admissions</a></li>
                 <li className='list'><a href='https://www.ssmiet.ac.in/infrastructure/' target={'_blank'}>Infrastructure</a></li>
                </ul>
                <div className='right_nav'>
                    <input type={Text} name='search' id='search'></input>
                    <button className='btn btn_sm'>Search</button>
                </div>
            </nav>
            <section className='section'>
             <div className='main'>
                <div className='first_part'>
                    <img src='https://www.ssmiet.ac.in/wp-content/uploads/2019/11/vission.jpeg' className='vision_img'/>
                 <h1 className='heading'>Vision</h1>
                 <p className='small'>
                 To inculcate strong knowledge of engineering among the students to excel in their domain through a standard of excellence in learning, research and transform them to face challenges and cater to the needs of the society by imparting competent technical and entrepreneurial skills with human values and ethics.
                 </p>
                </div>
                <div className='second_half'>
                <img src='https://www.ssmiet.ac.in/wp-content/uploads/2019/11/mission.jpeg' className='mission_img'/>
                    <h2 className='heading' id='mission'>Mission</h2>
                    <p className='small'>
                    To encourage students to become self-disciplined individuals through appropriate teaching learning process.

To empower students by providing conducive environment to develop them as systematic professionals and responsible citizens.

To maintain a healthy relationship with industries by establishing centers of excellence for multiple skill development and technological training.

To provide conceptual knowledge that supports design and development of new products for sustainable development.
                    </p>
                </div>
             </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                   <u>Copyright ©-All rights are reserved</u>
                </p>
            </footer>
        </div>
    );
}

export default Apps;