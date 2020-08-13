import React from 'react';
import ReactDOM from 'react-dom';
const Modal = ({children}) => {
    return  ReactDOM.createPortal(
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
            <div className="modal-dialog">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}
    
export default Modal;