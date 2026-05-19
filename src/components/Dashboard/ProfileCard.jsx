import Image from 'next/image';
import React from 'react'
import { HiOutlineMail, HiOutlineShieldCheck } from 'react-icons/hi'
import PatientPersonalDataUpdated from './PatientPersonalDataUpdated';

const ProfileCard = ({ patient }) => {
  const { name, email, image } = patient || {};

  return (
    <div className="w-full max-w-sm bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 space-y-6 shadow-md shadow-[#1e73be40]">
      
      <h2 className="text-sm font-bold text-[#191C20] uppercase tracking-wider border-b border-gray-200 pb-2">
        My Profile
      </h2>

      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={image || "/"} 
            alt={name || "PatientImage"} 
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Patient infos */}
        <div className="space-y-1.5 ">
          <h3 className="text-base font-bold text-slate-800 truncate">
            {name || "Guest User"}
          </h3>
          <p className="text-xs text-[#404750] font-medium truncate flex items-center gap-1">
            <HiOutlineMail className="w-3.5 h-3.5 text-[#1e73be]" />
            {email || "No email linked"}
          </p>
        </div>
      </div>

      <div className="bg-gray-50 border border-slate-100 p-3.5 rounded-2xl flex items-center gap-2 text-xs font-semibold text-emerald-700">
        <HiOutlineShieldCheck size={15} className="text-emerald-600" />
        <span>Verified Patient Account</span>
      </div>

        {/* Update Profile Button */}
      <div className="pt-4 border-t border-gray-200">
          <PatientPersonalDataUpdated name={name} image={image} />
      </div>

    </div>
  )
}

export default ProfileCard
