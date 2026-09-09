import React from 'react'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <div>
      <section style={{ height:'450px', backgroundImage:"url('https://d39l2hkdp2esp1.cloudfront.net/img/photo/138896/138896_00_2x.jpg?20180118121330')",
        backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment:'fixed'
      }}>

        <div className='row pt-5'>
          <div className='col-12 col-md-4'></div>
          <div className='col-12 col-md-4'>
            <div className='text-center mt-5 border shadow p-5 rounded' style={{backgroundColor:'rgb(255,255,255,0.3)'}}>
              <h1 style={{fontFamily:'Dancing Script'}}>Designed to get hired</h1>
              <h5>Your skills, your story, your next job - all in one</h5>
              {/* <a className='btn btn-dark' href="/resume">MAKE YOUR RESUME</a> */}
              <Link to={'/resume'} className='btn btn-dark'>MAKE YOUR RESUME</Link>
            </div>
          </div>
          <div className='col-12 col-md-4'>
        </div>
        </div>
      </section>


      <section>
        <h1 style={{fontFamily:'Dancing Script'}} className='text-center' >Tools</h1>
        <div className='row align-items-center'>
          <div className='col-md-6 col-12 ps-5'>
            <h3>Resume</h3>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
          <h3>Cover Letters</h3>
            <p>Easily write professional cover letters.</p>  
            <h3>Jobs</h3>
            <p>Automatically receive new and relevant job postings.</p>
            <h3>Applications</h3>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
          </div>
          <div className='col-md-6 col-12 ps-5'>
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="image" />
        </div>

        </div>

      </section>
             <section style={{ height:'450px', backgroundImage:"url('https://www.shutterstock.com/image-photo/collaborative-business-meeting-involving-professionals-260nw-2507861463.jpg')",
        backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment:'fixed'
      }}>
  </section>
  <section>
        <h1 style={{fontFamily:'Dancing Script'}} className='text-center' >Testimony</h1>
        <div className='row align-items-center'>
          <div className='col-md-6 col-12 ps-5'>
            <h3>Trusted by professionals worldwide</h3>
            <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          
          </div>
          <div className='col-md-6 col-12 ps-5'>
            <div className='row'>
              <div className='col-md-3 ps-5 d-flex flex-column gap-3'>
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="image" />
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="image" />
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="image" />
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="image" />
              </div>
             <div className='col-md-3 ps-5 d-flex flex-column gap-3'>
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="image" />
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="image" />
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="image" />
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="image" />
              </div> 
              <div className='col-md-3 ps-5 d-flex flex-column gap-3'>
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="image" />
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="image" />
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="image" />
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="image" />
              </div> 
              <div className='col-md-3 ps-5 d-flex flex-column gap-3'>
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="image" />
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="image" />
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="image" />
                <img className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="image" />
              </div> 



            </div>
        </div>

        </div>

      </section>



    </div>
  )
}

export default Landing