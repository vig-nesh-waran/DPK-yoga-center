import React from "react";
import './Model.css'

const TermsModel = () => {
  return (
    <>
      {/* Terms Modal */}
      <div
        className="modal fade"
        id="termsModal"
        tabIndex="-1"
        aria-labelledby="termsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="termsModalLabel">
                Terms of Policy
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h2 className=" fs-5 fw-bold">Terms and Conditions</h2>
              <p>
              <span>Class Registration:</span> All participants must register for classes in advance. Registration can be done online or at the center.
              <br/>
              <span>Class Attendance:</span> Participants are expected to arrive on time for classes. Late arrivals may not be permitted to join the class.
              <br/>
              <span>Health and Safety:</span> Participants are responsible for informing the instructor of any pre-existing health conditions or injuries prior to class. It is advised to consult a healthcare professional before starting any new exercise program.
              <br/>
              <span>Personal Belongings:</span> DPK Yoga Centre is not responsible for any loss or damage to personal belongings. Please ensure your belongings are secure at all times.
              <br/>
              <span>Code of Conduct:</span> Respectful behavior towards
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn model-button fs-6 fw-bold rounded-4 button"
                data-bs-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsModel;
