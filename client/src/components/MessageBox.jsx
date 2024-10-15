import React, { useEffect, useState } from 'react';
import { updateUserFailure,updateUserStart,updateUserSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function MessageDialog({from,to}) {

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentUser } = useSelector((state) => state.user);
  const { requestedTutors } = useSelector(state => state.user); 
  const [isRequested, setIsRequested] = useState(false);
  const openDialog = () => setIsOpen(true);


  const closeDialog = () => setIsOpen(false);


  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Message:', message); 

    try{

      dispatch(updateUserStart())

    const response = fetch("/api/request/createRequest",{
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from,
            to,
            message
          }),
    })

    const data = await response.json()
    dispatch(updateUserSuccess(data.curr_user))

    alert("Request sent")
    navigate(0)

    }catch(error){
        console.log(error)
        dispatch(updateUserFailure(error.message))
    }


    closeDialog();
  };


  useEffect(() => {
    if (requestedTutors?.includes(to)) {
      setIsRequested(true);
    } else {
      setIsRequested(false);
    }
  }, [requestedTutors,to])

  console.log(requestedTutors)
  console.log(to)

  return (
    <div>
      {/* Button to open dialog */}
      <button onClick={openDialog}  className={`bg-pink-700 rounded-full h-10 w-80 mt-10 text-white flex items-center justify-center ${isRequested ? "opacity-65" : "opacity-100"}`} disabled={isRequested}  >{isRequested ? "Request Pending" : "Request"}</button>

      {/* The dialog box */}
      {isOpen && (
        <div className="dialog-backdrop">
          <div className="dialog-box">
            <h2>Enter your message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={message}
                onChange={handleChange}
                placeholder="Type your message here"
                className="input-field text-black"
              />
              <div className="dialog-actions">
                <button type="submit" className="btn-submit rounded-md">Send</button>
                <button type="button" onClick={closeDialog} className="btn-cancel rounded-md">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Basic styling for the dialog */}
      <style>{`
        .dialog-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 120vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .dialog-box {
          background: white;
          padding: 20px;
          border-radius: 10px;
          width: 30vw;
          height : 13vw;
        }

        .input-field {
          
          width: 100%;
          padding: 8px;
          margin-bottom: 30px;
        }

        .dialog-actions {
          display: flex;
          justify-content: space-between;
          
        }

        .btn-primary, .btn-submit, .btn-cancel {
          
          padding: 10px 20px;
          cursor: pointer;
          
        }

        .btn-cancel {
          
          background-color: red;
          color: white;
          
        }

        .btn-submit {
          background-color: green;
          color: white;
        }

      `}</style>
    </div>
  );
}

export default MessageDialog;
