import React, { useState,FormEvent, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useAppSelector,useAppDispatch } from "../redux/hooks";
import { selectContacts } from "../redux/slice/contactSlice";
import { Contact } from "../redux/slice/contactSlice";
import { editContact } from "../redux/slice/contactSlice";

interface ContactItem {
  items?: Contact[];
  firstName?: string;
  lastName?: string;
  email?: string | number | symbol;
  phoneNumber?: number | null;
}
const ContactDetails: React.FC = () => {
  const [contactInfo, setContactinfo] = useState<ContactItem>({});
  const [edit,setEdit]=useState<boolean>(true)
  const [form,setForm]=useState<ContactItem>({
    firstName:'',
    lastName:"",
    email:"",
    phoneNumber:null
})

  const { index } = useParams<{ index: string }>();
  const contacts = useAppSelector(selectContacts);
  const dispatch=useAppDispatch()
  const navigate=useNavigate()

  useEffect(() => {
    setContactinfo(contacts[Number(index)]);
    console.log(contactInfo);
  }, []);

  const handleFirstnamechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log("e",e.target.value)
    if ((e.target.value) !== contactInfo.firstName){
    setForm((prevForm:ContactItem)=>({...prevForm,firstName:e.target.value}))
    }
   

}

const handleLastnamechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  if ((e.target.value) !== contactInfo.lastName){
    setForm((prevForm:ContactItem)=>({...prevForm,lastName:e.target.value}))
  }
     

  }

  const handleEmailchange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    if ((e.target.value) !== contactInfo.email){
    setForm((prevForm:ContactItem)=>({...prevForm,email:e.target.value}))
    }
   

}

const handlePhonenumberchange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  if (Number(e.target.value) !== contactInfo.phoneNumber){
    setForm((prevForm:ContactItem)=>({...prevForm,phoneNumber:Number(e.target.value)}))
  }
    

}

const handleSaveclick=()=>{
    setForm({
        firstName:contactInfo.firstName,
        lastName:contactInfo.lastName,
        email: String(contactInfo.email),
        phoneNumber: Number(contactInfo.phoneNumber),

})

dispatch(editContact({ index:Number(index), contact:form }));
navigate('/')
}




const handleEdit=()=>{
    setEdit(false)
}

  return (
    <div >
     {edit?
      <div className="mt-28">
        <div className="px-4 sm:px-0">
          <h3 className="text-base mr-14 font-semibold leading-7 text-gray-900">
            Contact Information
          </h3>
        </div>
        <div className="mt-8 ml-60 mr-48 border-t  border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">
                First Name :
              </dt>
              <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {contactInfo.firstName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">
                Last Name :
              </dt>
              <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {contactInfo.lastName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">
                Email address :
              </dt>
              <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {String(contactInfo.email)}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">
                Phone Number :
              </dt>
              <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {contactInfo.phoneNumber}
              </dd>
            </div>
          </dl>
          <div>
            <button onClick={handleEdit} className="bg-blue-500 mr-24 mt-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit Contact
            </button>
          </div>
        </div>
      </div>:



      <div>
          <div className="mt-0">
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto  max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Edit Contact
          </h2>
        </div>
        <form
          action="#"
          method="POST"
          
          className="mx-auto mt-16 max-w-xl sm:mt-8"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  defaultValue={contactInfo.firstName}
                  onChange={handleFirstnamechange}
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  defaultValue={contactInfo.lastName}
                  onChange={handleLastnamechange}
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  defaultValue={String(contactInfo.email)}
                  onChange={handleEmailchange}
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  defaultValue={Number(contactInfo.phoneNumber)}
                  onChange={handlePhonenumberchange}
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="button"
               onClick={handleSaveclick}
              className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>

      </div>
}
    </div>
  );
};

export default ContactDetails;
