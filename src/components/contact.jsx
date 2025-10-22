import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

function Contact() {
    return (
        <div className="text-white py-0 px-0" id="contact" style={{ backgroundColor: '#1f2a38' }}>
            <div className="w-full" style={{ paddingTop: '20px' }}>
                <h2 className="text-5xl font-bold text-center mb-8 px-10">
                    Contact <span style={{ color: '#3b82f6' }}>Me</span>
                </h2>

                <div className="flex justify-center gap-6 px-10 mb-6 flex-wrap">
                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-blue-400 transition duration-300 flex-1 max-w-sm">
                        <div className="flex items-center gap-4 group">
                            <div className="bg-blue-500 p-3 rounded-full group-hover:scale-110 transition duration-300 flex-shrink-0">
                                <FaEnvelope size={28} color="white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-2 text-blue-400">Email</h4>
                                <a 
                                    href="mailto:rmks1004@gmail.com" 
                                    className="text-gray-300 hover:text-yellow-400 transition duration-300"
                                    style={{ textDecoration: 'none', fontSize: '16px' }}
                                >
                                    rmks1004@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-blue-400 transition duration-300 flex-1 max-w-sm">
                        <div className="flex items-center gap-4 group">
                            <div className="bg-blue-500 p-3 rounded-full group-hover:scale-110 transition duration-300 flex-shrink-0">
                                <FaPhone size={28} color="white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-2 text-blue-400">Phone</h4>
                                <a 
                                    href="tel:+91 9821137461" 
                                    className="text-gray-300 hover:text-yellow-400 transition duration-300"
                                    style={{ textDecoration: 'none', fontSize: '16px' }}
                                >
                                    +91 9821137461
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-4" style={{ borderTop: '2px solid #334155' }}>
                    <p className="text-gray-400 px-10" style={{ fontSize: '16px' }}>
                        Copyright © Mukul Singh 2025 All rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;