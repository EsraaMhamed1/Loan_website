import {useState} from 'react';
import Modal from './Modal';

const LoanPage =()=>{
    const [errorMessage,setErrorMessage]=useState(null);
    const [showModel,setShowModel]= useState(false);
    const [form , setForm]=useState(
        {
            name:"",
            age:"",
            phone:"",
            salary:"",
            check:"",
        }
    );
    const {age ,phone} = form;
    const handleFormSubmit=()=>{
        setErrorMessage(null);
        if(age<18 || age>70){
            setErrorMessage("the age is not allawed");
        }else if(phone.length < 10 || phone.length>12){
            setErrorMessage("the phone number is not valid ")
        }

        setShowModel(true)
    }

    const btnIsDisabled = 
    form.name===" " || 
    form.age===""|| 
    form.phone==="";
  

    return(
        <div onClick={()=>{
            if(showModel){
                setShowModel(false)
            }
           
        }} 
            style={{width:"50%"}}>
            <form className="form"
               onSubmit={(event)=>{
                  event.preventDefault();
                }} 
                style={{textAlign:"center" }}>
                <h2 style={{textAlign:"center"}}>Requesting a Loan</h2>

                <hr></hr>
                <label>Name : </label>
               
                <input 
                    placeholder ='Enter your Name'
                    className="input"
                    value={form.name}
                    onChange={(event)=>{
                            setForm({...form,name:event.target.value})
                    }}
                />
                
                <label>Phone Number : </label>
                
                <input className="input"
                    placeholder='Enter your phone Num'
                    value={form.phone}
                    onChange={(event)=>{
                        setForm({...form,phone:event.target.value})
                    }}
                />
                
                <label>Age : </label>
                
                <input className="input"
                   placeholder={"Enter your Age"}
                    value={form.age}
                    onChange={(event)=>{
                        setForm({...form,age:event.target.value})
                    }}
                />
                
                <label>Are you an employee ?</label>
                 
                <input type="checkbox" 
                        style={{height:"20px"}}
                       checked={form.check}
                       onChange={(event)=>{
                        setForm({...form, check:event.target.checked})

                    }}

                />
                
                <label>Salary :</label>
                
                <select className="input" 
                     value={form.salary}
                     onChange={(event)=>{
                        setForm({...form,salary:event.target.value})
                     }}
                     >
                    <option>500$</option>
                    <option>1000$</option>
                    <option>1500$</option>
                </select>
                
                <button 
                   id='btn'
                   className={btnIsDisabled ?"disabled" :""}
                   disabled={btnIsDisabled} 
                    onClick={handleFormSubmit}
                   >
                  
                   Submit
                   
                </button>
                
            </form>
            <Modal 
                isVisible={showModel}
                errorMessage={errorMessage}
            />
        </div>
    )

}

export default LoanPage;