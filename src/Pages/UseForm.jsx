import React, { useState } from 'react';
import Steps from '../Components/Steps';
import Preview from '../Components/Preview';


function UseForm() {

  const [resumeData, setResumeData] = useState({
    fullname: '',
    job: '',
    location: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    degree: '',
    university: '',
    passoutYear: '',
    skills: [],
    summary: ''
  });

  return (
    <div className="container-fluid">

      <div className="row p-5">

        {/* FORM */}
        <div className="col-lg-6">

          <Steps
            setResumeData={setResumeData}
            resumeData={resumeData}
          />

        </div>

        {/* PREVIEW */}
        <div className="col-lg-6">

          {resumeData.fullname && (
            <Preview resumeData={resumeData} />
          )}

        </div>

      </div>

    </div>
  );
}

export default UseForm;