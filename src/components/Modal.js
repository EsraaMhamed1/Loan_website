import './modal.css'
const Modal =({isVisible , errorMessage=null})=>{
    if(isVisible)
    {
    return(
        <div id="modal">
            <div id="modalContant">
                <h2 style={{color:errorMessage?"red":"green"}}>{errorMessage != null? errorMessage
                :"The Form Has Submitted Successfully"}
                </h2>
            </div>
        </div>
    );
    }else{
        return <></>
    }

}
export default Modal;