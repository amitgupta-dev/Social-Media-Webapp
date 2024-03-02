import { useEffect, useState } from "react"
import * as yup from "yup"
import { MdAddCircleOutline } from "react-icons/md"
import { FiUpload } from "react-icons/fi"
import AddWork from "./components/addWork"
import WorkCard from "./components/workCard"
import EducationCard from "./components/educationCard"
import PlacesLived from "./components/placesLived"
import AddEducation from "./components/addEducation"
import AddPlacesLived from "./components/addPlacesLived"
import { useDispatch, useSelector } from "react-redux"
import {
    setAvatar,
    setCover,
    setAbout,
    setDob,
    setEmail,
    setFamilyType,
    setGender,
    setName,
    setNickname,
    setPhone,
    setQuote,
    setRelationship,
    setWork,
    setEducation,
    setPlacesLived,
    addWork,
    addEducation,
    addPlacesLived,
    setWorkField,
    setEducationField,
    setPlacesLivedField,
} from "../../redux/slices/EditProfileSlice"
import axios from "axios"

import { getFormattedDate } from '../../utils/getFormattedDate'
import { fetchUserData } from "../../redux/slices/userSlice"

const fromSchema = yup.object({
    avatar: yup.string(),
    cover: yup.string(),
    name: yup.string().min(2).max(50),
    email: yup.string().email(),
    phone: yup.number().nullable(),
    dob: yup.number(),
    nickname: yup.string().nullable(),
    gender: yup.string(),
    familyType: yup.string().nullable(),
    relationship: yup.string().nullable(),
    about: yup.string().nullable(),
    quote: yup.string().nullable(),
    work: yup.array(yup.object({
        _id: yup.string().nullable(),
        position: yup.string(),
        organization: yup.string(),
        from: yup.number(),
        to: yup.number()
    })).nullable(),
    education: yup.array(yup.object({
        _id: yup.string().nullable(),
        course: yup.string(),
        organization: yup.string(),
        from: yup.number(),
        to: yup.number()
    })).nullable(),
    placesLived: yup.array(yup.object({
        _id: yup.string().nullable(),
        location: yup.string(),
        from: yup.number(),
        to: yup.number()
    })).nullable(),
    updatedAt: yup.string()
})

const EditProfile = () => {

    const dispatch = useDispatch()

    const [isAddingWork, setIsAddingWork] = useState(false)
    const [isAddingEducation, setIsAddingEducation] = useState(false)
    const [isAddingLocation, setIsAddingLocation] = useState(false)

    const [images, setImages] = useState({})

    const editedData = useSelector((state) => state.editProfile)
    const user = useSelector((state) => state.user)

    useEffect(() => {
        if (user.data) {
            dispatch(setAvatar(user.data.avatar || ""))
            dispatch(setCover(user.data.cover || ""))
            dispatch(setAbout(user.data.about || ""))
            dispatch(setDob(getFormattedDate(user.data.dob) || ""))
            dispatch(setEmail(user.data.email || ""))
            dispatch(setFamilyType(user.data.familyType || ""))
            dispatch(setGender(user.data.gender || ""))
            dispatch(setName(user.data.name || ""))
            dispatch(setNickname(user.data.nickname || ""))
            dispatch(setPhone(user.data.phone || ""))
            dispatch(setQuote(user.data.quote || ""))
            dispatch(setRelationship(user.data.relationship || ""))
            if (user.data?.work.length > 0) {
                let workPayload = user.data.work.map(item => ({
                    ...item,
                    from: getFormattedDate(item.from),
                    to: getFormattedDate(item.to)
                }))
                dispatch(setWork(workPayload))
            }
            if (user.data?.education.length > 0) {
                let educationPayload = user.data.education.map(item => ({
                    ...item,
                    from: getFormattedDate(item.from),
                    to: getFormattedDate(item.to)
                }))
                dispatch(setEducation(educationPayload))
            }
            if (user.data?.placesLived.length > 0) {
                let placesLivedPayload = user.data.placesLived.map(item => ({
                    ...item,
                    from: getFormattedDate(item.from),
                    to: getFormattedDate(item.to)
                }))
                dispatch(setPlacesLived(placesLivedPayload))
            }
        }
        console.log(editedData)
    }, [user.data])

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            if (images.avatar) {
                const url = await uploadImage(images.avatar, "avatar")
                dispatch(setAvatar(url))
            }
            if (images.cover) {
                const url = await uploadImage(images.cover, "cover")
                console.log(url)
                dispatch(setCover(url))
            }
            console.log(editedData)
            const res = await axios.patch(`${import.meta.env.VITE_SERVER_BASE_URL}/user`, editedData, { withCredentials: true })
            // dispatch(fetchUserData())
            console.log(res.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const uploadImage = async (file, fileType) => {
        if (file) {

            const imageForm = new FormData()
            imageForm.append('file', file)

            const preset = fileType === "cover" ? "coverPreset" : fileType === "avatar" ? "avatarPreset" : "basicPreset"
            imageForm.append('upload_preset', preset)

            const getUploadType = () => {
                if (fileType === "avatar" || fileType === "cover") {
                    imageForm.append('folder', "Avatars And Covers")
                    return "image"
                }
                else if (fileType === "image") {
                    imageForm.append('folder', "Images")
                    return "image"
                }
                else if (fileType === "reel") {
                    imageForm.append('folder', "Reels")
                    return "video"
                }
                else if (fileType === "story") {
                    imageForm.append('folder', "Stories")
                    return "video"
                }
                else if (fileType === "video") {
                    imageForm.append('folder', "Videos")
                    return "video"
                }
                else {
                    console.log('please select a fileType among "avatar", cover", image", reel", story", "video"')
                }
            }

            const uploadType = getUploadType()

            console.log(uploadType)

            const res = await axios.post(`${import.meta.env.VITE_CLOUDINARY_BASE_URL}/${import.meta.env.VITE_CLOUDINARY_CLOUDNAME}/${uploadType}/upload`, imageForm)

            console.log(res.data)

            return res.data.url
        }
    }

    return (
        <section className="relative w-full bg-gray-50 max-w-[1050px] mx-auto overflow-y-scroll">
            <div className="absolute w-full px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                My account
                            </h6>
                            <button onClick={() => console.log(editedData)}>hello</button>
                        </div>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-4">
                    <form onSubmit={handleSubmit}>
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            User Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full sm:w-1/3 px-2">
                                <div className="relative w-full mb-3">
                                    <p className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                        Avatar
                                    </p>
                                    <label htmlFor="avatar" className="flex justify-center items-center aspect-square p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded-md text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 bg-cover bg-center" style={{ backgroundImage: images.avatar ? `url(${URL.createObjectURL(images.avatar)})` : 'url("https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=360&t=st=1701852962~exp=1701853562~hmac=d4f8432df21b21ce0043678358604f69e585b138c304a33a29029ee9b67db393")' }} ><FiUpload color="white" size={40} /></label>
                                    <input type="file" onChange={(event) => setImages({ ...images, avatar: event.target?.files?.[0] })} id="avatar" className="hidden" />
                                </div>
                            </div>
                            <div className="w-full sm:w-2/3 px-2 sm:px-4">
                                <div className="relative w-full mb-3">
                                    <p className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                        Cover
                                    </p>
                                    <label htmlFor="cover" className="flex justify-center items-center aspect-[2/1] p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded-md text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 bg-cover bg-center" style={{ backgroundImage: images.cover ? `url(${URL.createObjectURL(images.cover)})` : 'url("https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=360&t=st=1701852962~exp=1701853562~hmac=d4f8432df21b21ce0043678358604f69e585b138c304a33a29029ee9b67db393")' }}><FiUpload color="white" size={40} /></label>
                                    <input type="file" onChange={(event) => setImages({ ...images, cover: event.target?.files?.[0] })} id="cover" className="hidden" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="relative w-full mb-3">
                                    <label htmlFor="name" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                        name
                                    </label>
                                    <input type="text" id="name" value={editedData.name} onChange={(event) => dispatch(setName(event.target.value))} className="p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="relative w-full mb-3">
                                    <label htmlFor="email" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                        Email address
                                    </label>
                                    <input type="email" id="email" value={editedData.email} onChange={(event) => dispatch(setEmail(event.target.value))} className="p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="relative w-full mb-3">
                                    <label htmlFor="phone" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                        Phone
                                    </label>
                                    <input type="number" id="phone" value={editedData.phone} onChange={(event) => dispatch(setPhone(event.target.value))} className="p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="relative w-full mb-3">
                                    <label htmlFor="dob" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                        Date of Birth
                                    </label>
                                    <input type="date" id="dob" value={editedData.dob} onChange={(event) => dispatch(setDob(event.target.value))} className="p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="relative w-full mb-3">
                                    <label htmlFor="nickname" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                        Nickname
                                    </label>
                                    <input type="text" id="nickname" value={editedData.nickname} onChange={(event) => dispatch(setNickname(event.target.value))} className="p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold dark:text-white">Gender</label>
                                    <div className='flex gap-5 py-4 text-md'>
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <input type="radio" checked={editedData.gender === "Male"} onChange={(event) => dispatch(setGender(event.target.value))} name="gender" value="Male" required />
                                                <span className="label-text px-2">Male</span>
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <input type="radio" checked={editedData.gender === "Female"} onChange={(event) => dispatch(setGender(event.target.value))} name="gender" value="Female" required />
                                                <span className="label-text px-2">Female</span>
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <input type="radio" checked={editedData.gender === "Others"} onChange={(event) => dispatch(setGender(event.target.value))} name="gender" value="Others" required />
                                                <span className="label-text px-2">Others</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="relative w-full mb-3">
                                    <label htmlFor="familyType" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                        Family Type
                                    </label>
                                    <input type="text" id="familyType" value={editedData.familyType} onChange={(event) => dispatch(setFamilyType(event.target.value))} className="p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="relative w-full mb-3">
                                    <label htmlFor="relationship" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                        Relatinoship
                                    </label>
                                    <input type="text" id="relationship" value={editedData.relationship} onChange={(event) => dispatch(setRelationship(event.target.value))} className="p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                </div>
                            </div>
                            <div className="w-full lg:w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label htmlFor="about" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                        About me
                                    </label>
                                    <textarea id="about" value={editedData.about} onChange={(event) => dispatch(setAbout(event.target.value))} className="p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows={5} />
                                </div>
                            </div>
                            <div className="w-full px-4 mb-4">
                                <div className="relative w-full mb-3">
                                    <label htmlFor="quote" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                        Quote
                                    </label>
                                    <input id="quote" value={editedData.quote} type="text" onChange={(event) => dispatch(setQuote(event.target.value))} className="p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                </div>
                            </div>
                        </div>

                        {/*-------------------------- works ------------------------*/}
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-4 font-bold uppercase">
                            Work
                        </h6>
                        {
                            editedData.work?.map((item, index) => <WorkCard key={index} index={index} />)
                        }
                        <div className="w-full px-4 mb-6">
                            <button type="button" onClick={() => setIsAddingWork(true)} className="flex justify-center w-full gap-2 border-gray-300 bg-gray-100 hover:bg-gray-200 border-2 focus:outline-none font-medium rounded-lg text-md px-auto py-2 dark:bg-gray-700 dark:focus:bg-gray-800"><MdAddCircleOutline size={23} color="black" /> Add Work</button>
                        </div>

                        {/*------------------------ education -----------------------*/}
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-4 font-bold uppercase">
                            Education
                        </h6>
                        {
                            editedData.education?.map((item, index) => <EducationCard key={index} index={index} />)
                        }
                        <div className="w-full px-4 mb-6">
                            <button type="button" onClick={() => setIsAddingEducation(true)} className="flex justify-center w-full gap-2 border-gray-300 bg-gray-100 hover:bg-gray-200 border-2 focus:outline-none font-medium rounded-lg text-md px-auto py-2 dark:bg-gray-700 dark:focus:bg-gray-800"><MdAddCircleOutline size={23} color="black" /> Add Education</button>
                        </div>

                        {/* ------------------------places lived-------------------- */}
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-4 font-bold uppercase">
                            Places Lived
                        </h6>
                        {
                            editedData.placesLived?.map((item, index) => <PlacesLived key={index} index={index} />)
                        }
                        <div className="w-full px-4 mb-6">
                            <button type="button" onClick={() => setIsAddingLocation(true)} className="flex justify-center w-full gap-2 border-gray-300 bg-gray-100 hover:bg-gray-200 border-2 focus:outline-none font-medium rounded-lg text-md px-auto py-2 dark:bg-gray-700 dark:focus:bg-gray-800"><MdAddCircleOutline size={23} color="black" /> Add Location</button>
                        </div>
                        <button type="submit" className="flex gap-2 m-4 bg-blue-600 text-white hover:bg-blue-700 border-2 focus:outline-none font-medium rounded-lg text-md px-4 py-2 dark:bg-gray-700 dark:focus:bg-gray-800">Save</button>
                    </form>
                </div>
            </div >
            {
                isAddingWork && <AddWork setIsAddingWork={setIsAddingWork} />
            }
            {
                isAddingEducation && <AddEducation setIsAddingEducation={setIsAddingEducation} />
            }
            {
                isAddingLocation && <AddPlacesLived setIsAddingLocation={setIsAddingLocation} />
            }
        </section >
    )
}

export default EditProfile
