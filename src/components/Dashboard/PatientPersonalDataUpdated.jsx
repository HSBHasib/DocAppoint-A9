"use client";
import {
  FiUser,
  FiLink,
} from "react-icons/fi";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Button, Modal, Surface } from "@heroui/react";

const PatientPersonalDataUpdated = ({ name, image }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: name || "",
      image: image || "",
    },
  });

  const formHandaler = async (data) => {
    try {
      const { name, image } = data;
      await authClient.updateUser({
        name,
        image,
      });

      // Success
      toast.success("Profile updated!", {
        position: "top-center",
        autoClose: 600,
      });
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <Modal>
        <Button className="w-full bg-[#1e73be] hover:bg-[#165a94] text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 shadow-xs">
          <HiOutlinePencilAlt size={15} /> Edit Profile
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-sm">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-[#1e73be]/30">
                  <HiOutlinePencilAlt size={20} />
                </Modal.Icon>
                <Modal.Heading>Update Your Info</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-2">
                <Surface variant="default">
                  <form
                    onSubmit={handleSubmit(formHandaler)}
                    className="space-y-5"
                  >
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Name
                      </label>
                      <div className="relative rounded-xl">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                          <FiUser className="h-5 w-5" />
                        </div>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#1e73be] focus:bg-white transition-all text-slate-900"
                          {...register("name", {
                            required: true,
                            pattern: /^[a-zA-Z\s]{3,25}$/,
                          })}
                        />
                        {errors.name && (
                          <p className="text-red-500 px-2 text-xs pt-0.5">
                            Only letters allowed (min. 3 chars)
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Photo URL */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Photo URL
                      </label>
                      <div className="relative rounded-xl">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                          <FiLink className="h-5 w-5" />
                        </div>
                        <input
                          type="url"
                          placeholder="Enter your photo url"
                          className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#1e73be] focus:bg-white transition-all text-slate-900"
                          {...register("image")}
                        />
                        {errors.image ? (
                          <p className="text-red-500 px-2 text-xs pt-0.5">
                            Enter a valid image url
                          </p>
                        ) : (
                          <p className="text-gray-700 px-2 text-xs pt-0.5">
                            Optional
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Update Button */}
                    <Button
                      slot="close"
                      type="submit"
                      className="w-full bg-[#1e73be] hover:bg-[#165a94] text-white font-semibold py-3.5 px-4 rounded-xl shadow-md shadow-blue-500/10 transition-all duration-200 text-sm mt-4"
                    >
                      Save Chnages
                    </Button>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default PatientPersonalDataUpdated;
