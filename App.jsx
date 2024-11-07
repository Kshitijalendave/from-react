import React, { useState } from 'react';
import './App.css';
import FormInput from './Components/FormInput';

export default function App() {

  const [value, setValue] = useState({
    userName: '',
    emailId: '',
    contact: '',
    birthdate: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'userName',
      type: 'text',
      placeholder: 'UserName',
      label: 'UserName:-',
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$"
    },
    {
      id: 2,
      name: 'emailId',
      type: 'email',
      placeholder: 'Email-ID',
      label: 'Email-ID:-',
      errorMessage:"It should be a valid email address!",
      required: true
    },
    {
      id: 3,
      name: 'contact',
      type: 'contact',
      placeholder: 'Contact',
      label: 'Contact:-',
      errorMessage:"Plz enter a valid phone number!",
      required: true
    },
    {
      id: 4,
      name: 'birthdate',
      type: 'date',
      placeholder: 'Birth-Date',
      label: 'Birth-Date:-',
    },
    {
      id: 5,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password:-',
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      required: true,
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 6,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      label: 'Confirm Password:-',
      errorMessage:"Passwords don't match!",
      required: true,
      pattern:value.password
    },
  ];
  

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className='app'>
      <form onSubmit={onSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={value[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


















// import React from 'react'
// import './App.css'
// import FormInput from './Components/FormInput'
// import { useState } from 'react'

// export default function App() {

//   let [values , setvalues]=useState({
//     UserName:"",
//     emailid:"",
//     dob:"",
//     contact:"",
//     password:"",
//     confirmpassword:""
//   })
//   let inputs=[
//     {
//       id:1,
//       name:'userName',
//       type:'text',
//       placeholder:'userName',
//       lable:'userName'
//     },
//     {
//       id:2,
//       name:'email',
//       type:'text',
//       placeholder:'email',
//       lable:'email'
//     },
//     {
//       id:3,
//       name:'dob',
//       type:'text',
//       placeholder:'dob',
//       lable:'dob'
//     },
//     {
//       id:4,
//       name:'contact',
//       type:'text',
//       placeholder:'contact',
//       lable:'contact'
//     },
//     {
//       id:5,
//       name:'password',
//       type:'text',
//       placeholder:'password',
//       lable:'password'
//     },
//     {
//       id:4,
//       name:'confirmpassword',
//       type:'text',
//       placeholder:'confirmpassword',
//       lable:'confirmpassword'
//     }
//   ]

//   console.log(values)
//   let onSubmit = (e) => {
//     e.preventDefault()
//     let data = new FormData(e.target)
//     console.log(Object.fromEntries(data.entries()))
//   }

//   return (
//     <>
//       <div className='app'>
//         <form onSubmit={onSubmit}>

//           {inputs.map((input)=>(
//             <FormInput
//             key={input.id}
//             {...input}
//             value={values[input.name]}
//             onChange={onChange}/>
//           ))}
//           {/* <FormInput placeholder="UserName" name='userName' setUser={setvalues} /><br/>
//           <FormInput placeholder="Email Id" name='emailId' setUser={setvalues} /><br/>
//           <FormInput placeholder="Password" name='password' setUser={setvalues} /><br/>
//           <FormInput placeholder="Confirm Password" name='confirmPassword' setUser={setvalues} /><br/>
//           <FormInput placeholder="Date Of Birth" name='dob' setUser={setvalues} /><br/>
//           <FormInput placeholder="Contact" name='contact' setUser={setvalues} /><br/> */}
//           <button>Submit</button>
//         </form>
//       </div>
//     </>
//   )
// }

