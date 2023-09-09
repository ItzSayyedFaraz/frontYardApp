import React, { useState, useEffect } from "react";
import { useNavigate,NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  Contact,
  selectContacts,
} from "../redux/slice/contactSlice";
import { deleteContact } from "../redux/slice/contactSlice";

interface ContactItem {
  items?: Contact[];
  firstName?: string;
  lastName?: string;
  email?: string | number | symbol;
  phoneNumber?: number | null;
}

const Home: React.FC<ContactItem> = () => {
  const [allContacts, setAllcontacts] = useState<ContactItem[]>([]);
  const [contactsState,setContactsstate]=useState<boolean>(false)
  const contacts = useAppSelector(selectContacts);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    setAllcontacts(contacts);
    setContactsstate(true)
    console.log(allContacts);
  }, [contacts,contactsState]);

  if ( contactsState){
    <div>"No Contacts to display"</div>
  }

 

  const contactDetails = (index: number) => {
    navigate(`/contactdetails/${index}`);
  };


  return (
    <div>
      <div className="mt-28">
        <h1 className="font-semibold ">Contacts</h1>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 ml-48 mt-8 mr-4">
            {allContacts.map((contact, index) => (
              <div key={index}>
                <ul>
                  <li className="flex justify-center  mt-4 gap-x-6 py-5 border  border-blue-500 rounded-full max-w-md">
                    <div className="flex min-w-0 gap-x-4">
                      <img
                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src="https://media.istockphoto.com/id/1129113667/photo/got-a-problem-contact-us.jpg?s=1024x1024&w=is&k=20&c=wqidxdGPkidrJy1kLjGg5l_fffRXZETKTwOtGfPNqvU="
                        alt="No Image"
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {contact.firstName}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {String(contact.email)}
                        </p>
                      </div>
                    </div>

                    <div className="hidden  shrink-0 sm:flex sm:flex-col sm:items-end">
                      <div className="mt-1  flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div
                            onClick={() =>
                              dispatch(() => contactDetails(index))
                            }
                            className="h-1.5 w-1.5 rounded-full cursor-pointer bg-blue-500"
                          ></div>
                        </div>
                        <p
                          onClick={() => dispatch(() => contactDetails(index))}
                          className="text-sm leading-6 cursor-pointer text-blue-900 "
                        >
                          Details
                        </p>
                      </div>
                      <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full  bg-emerald-500/20 p-1">
                          <div
                            onClick={() => dispatch(deleteContact(index))}
                            className="h-1.5 w-1.5 cursor-pointer rounded-full bg-red-500"
                          ></div>
                        </div>
                        <p
                          onClick={() => dispatch(deleteContact(index))}
                          className="text-sm leading-6 cursor-pointer  text-red-500"
                        >
                          Delete
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>

      </div>
    </div>
  );
};

export default Home;
