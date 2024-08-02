import React from 'react'
import './Model.css'

const AboutModel = () => {
  return (
    <>
        {/* About Modal */}
        <div className="modal fade" id="aboutModal" tabIndex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="aboutModalLabel">DPK Yoga Center</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>DPK Yoga Centre, located in a serene environment, is committed to spreading the awareness and benefits of yoga to help you lead a balanced, healthy, and joyful life. Founded by Dhakshayani K in 2020 after she transitioned from a career in software engineering to pursue her passion for yoga, our center offers a variety of yoga styles including Ashtanga Yoga, Hatha Yoga, and a unique fun yoga style. Dhakshayani, with over 9 years of experience and a certification from RV Yoga Kendra in Bangalore, focuses on personalized yoga training that enhances breath awareness, promoting deeper calmness and blissfulness. We invite you to join our supportive community and experience the transformative power of yoga with us.</p>
                        <h3 className=' fw-bolder'>
                            Dhakshayani K,<span className='text-muted'>Yoga Instructor</span> 
                        </h3>
                        <p>Dhakshayani K is the dedicated yoga instructor at DPK Yoga Centre, with over 9 years of experience in teaching yoga. She completed her teacher's training from RV Yoga Kendra in Bangalore and has been passionately promoting the benefits of yoga since 2020. Dhakshayani’s approach to yoga focuses on breath awareness, helping individuals utilize the full capacity of their lungs and achieve a deeper state of awareness and calmness. Join Dhakshayani at DPK Yoga Centre to embark on your journey of self-discovery and wellness.</p>
                        <h3 className=' fw-bolder'>
                        Courses at <span className='text-muted'>DPK Yoga Centre</span> 
                        </h3>
                        <p>Discover a variety of yoga courses at DPK Yoga Centre designed to meet your unique needs and preferences. Our classes range from beginner to advanced levels and include styles such as Ashtanga Yoga, Hatha Yoga, and our unique fun yoga. Whether you are looking to improve your flexibility, build strength, or find inner peace, we have a class for you. Join us to experience the holistic benefits of yoga and become part of our vibrant community.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn model-button" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default AboutModel