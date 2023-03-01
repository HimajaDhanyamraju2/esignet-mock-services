import React from 'react';
import { Link } from 'react-router-dom';
export default function AppointmentConfirmation({ isOpen, username, onClose }) {

    return (
        <div
            className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'}`}
        >
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="bg-white rounded-lg p-8">
                    <div className="flex items-center">
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative max-w-md  my-6 mx-auto ">

                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white">

                                    <div className="flex items-start text-white justify-between bg-blue-500 p-2 border-b border-solid border-slate-200 rounded-t">
                                        <img src="images/successIcon.png" className="h-10 w-10"></img>
                                        <h3 className="text-2xl font-semibold">
                                            Appointment Booked Successfully !
                                        </h3>

                                    </div>

                                    <div className="relative p-2 flex-auto border-b border-solid border-slate-200 ">
                                        <div className="whitespace-pre-wrap">
                                            <div>
                                                <span className="font-semibold text-sm text-blue-600">
                                                    Name: </span> <span className="text-sm">{username}</span>
                                                <span className="float-right font-semibold text-sm text-blue-600">Application Number
                                                    <p className="text-black ml-5">7658933782</p><img src="images/qr-code.png" className="h-10 w-10 ml-10"></img></span>
                                                <p className="font-semibold text-sm text-blue-600">Appointment Details:</p>
                                                <span className="text-sm">4th March 2023, 9:00-10:00 AM</span><br></br>
                                                <span className="whitespace-pre-wrap text-sm"># 45/2, Colombia Asia, Marathahalli - Sarjapur Rd, Opposite Iblur, Bellandur, Bengaluru, Karnataka-560102</span>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="flex items-center justify-start p-2 ">
                                        <Link to="/userprofile">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white left-0 p-2 m-2 font-bold rounded">
                                                Home
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

