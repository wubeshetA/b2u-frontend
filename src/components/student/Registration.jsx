import React, { useState } from 'react';
import axios from 'axios';


const BaseUrl = 'https://starfish-app-vama8.ondigitalocean.app';
const StudentRegistrationForm = () => {
  const initialFormData = {
    first_name: '',
    middle_name: '',
    last_name: '',
    date_of_birth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    school: '',
    school_address: '',
    grade: '',
    cgpa: '',
    intended_major1: '',
    intended_major2: '',
    intended_major3: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [file, setFile] = useState([]);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  const handleFileChange = (event) => {
    // if event.target.files[0] not in the array file, add it
    if (!file.includes(event.target.files[0])) {
      setFile([...file, event.target.files[0]]);
    }
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { ...formData };
  
    try {
      setLoading(true); // Start loading animation
      const response = await axios.post(`${BaseUrl}/registrar/students/`, postData);
  
      const newStudentId = response.data.id;
      const formData = new FormData();
  
      for (let i = 0; i < file.length; i++) {
        formData.set('attachment', file[i]);
        await axios.post(`${BaseUrl}/registrar/students/${newStudentId}/attachments/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      }


      alert('Your application has been submitted successfully!');
      setLoading(false); // Stop loading animation
      setSubmitted(true); // Show success message
      setFile([]); // Clear the file input
      setFormData(initialFormData); // Clear the form


    } catch (error) {
      setLoading(false); // Stop loading animation on error
      console.error("====================================");
      console.log(postData);
      console.error(error);
      console.error("====================================");
    } finally {
      // Reset loading and submitted states after handling submission result
      setLoading(false);
      setSubmitted(false);

    }
  };
  

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow font-bodyFont">
      <h2 className="text-xl font-semibold mb-4">Student Application</h2>

      <div className='mb-20'>
      If you are grade 11 or 12 Ethiopian high school student, this might be the place to transform your life. 
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
        {/* First Name */}
        <div className="mb-4 col-span-1">
          <label htmlFor="first_name" className="block text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        {/* Middle Name */}
        <div className="mb-4 col-span-1">
          <label htmlFor="middle_name" className="block text-sm font-medium">
            Middle Name
          </label>
          <input
            type="text"
            id="middle_name"
            name="middle_name"
            value={formData.middle_name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4 col-span-1">
          <label htmlFor="last_name" className="block text-sm font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4 col-span-1">
          <label htmlFor="date_of_birth" className="block text-sm font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-4 col-span-1">
          <label htmlFor="gender" className="block text-sm font-medium">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          >
            <option value="">Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>

        {/* Email */}
        <div className="mb-4 col-span-1">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4 col-span-1">
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4 col-span-1">
          <label htmlFor="address" className="block text-sm font-medium">
            Address
          </label>
          <input
          type='text'
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            rows="2"
            required
          />
        </div>

        {/* School */}
        <div className="mb-4 col-span-1">
          <label htmlFor="school" className="block text-sm font-medium">
            School
          </label>
          <input
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        {/* School Address */}
        <div className="mb-4 col-span-1">
          <label htmlFor="school_address" className="block text-sm font-medium">
            School Address
          </label>
          <input
          type="text"
            id="school_address"
            name="school_address"
            value={formData.school_address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            rows="2"
            required
          />
        </div>

        {/* Grade */}
        <div className="mb-4 col-span-1">
          <label htmlFor="grade" className="block text-sm font-medium">
            Grade
          </label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        {/* CGPA */}
        <div className="mb-4 col-span-1">
          <label htmlFor="cgpa" className="block text-sm font-medium">
            CGPA
          </label>
          <input
            type="text"
            id="cgpa"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        {/* Intended Major 1 */}
        <div className="mb-4 col-span-1">
          <label htmlFor="intended_major1" className="block text-sm font-medium">
            Intended Major 1
          </label>
          <input
            type="text"
            id="intended_major1"
            name="intended_major1"
            value={formData.intended_major1}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        {/* Intended Major 2 */}
        <div className="mb-4 col-span-1">
          <label htmlFor="intended_major2" className="block text-sm font-medium">
            Intended Major 2
          </label>
          <input
            type="text"
            id="intended_major2"
            name="intended_major2"
            value={formData.intended_major2}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>

        {/* Intended Major 3 */}
        <div className="mb-4 col-span-1">
          <label htmlFor="intended_major3" className="block text-sm font-medium">
            Intended Major 3
          </label>
          <input
            type="text"
            id="intended_major3"
            name="intended_major3"
            value={formData.intended_major3}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>

        <div className='mb-4 col-span-3 mt-20'>
          <p><b>Attachements</b></p>
        </div>
        <div className='mb-4 col-span-3'>
          <p>Upload a pdf file for the following prompts</p>
        </div>

        {/* Transcript */}

        <div className="mb-4 col-span-3">
          <label htmlFor="attachment" className="block text-sm font-medium">
            Upload your Transcript (.PDf)
          </label>
          <input
            type="file"
            id="attachment1"
            name="attachment1"
            accept=".pdf"
            onChange={handleFileChange}
            className="mt-1"
          />
        </div>

        <div className="mb-4 col-span-3">
          <label htmlFor="attachment" className="block text-sm font-medium">
          In 500 words tell us about yourself. You are not allowed beyond 500 words but you can write with less words. * 
          </label>
          <input
            type="file"
            id="attachment2"
            name="attachment2"
            accept=".pdf"
            onChange={handleFileChange}
            className="mt-1"
          />
        </div>


        <div className="mb-4 col-span-3">
          <label htmlFor="attachment" className="block text-sm font-medium">
            Upload your Transcript (.PDf)
          </label>
          <input
            type="file"
            id="attachment2"
            name="attachment2"
            accept=".pdf"
            onChange={handleFileChange}
            className="mt-1"
          />
        </div>


        <div className="mt-4 col-span-3">

  <div className="flex justify-center">
    <button
      type="submit"
      className={`mb-20  px-4 py-2 bg-designColor text-white rounded hover:bg-designColorLight ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={loading}
    >
      {loading ? 'Submitting...' : 'Submit Application'}
    </button>
  </div>
</div>

{submitted && (
  <div className="mt-4 col-span-3 text-green-600 font-semibold">
    Application successfully submitted!
  </div>
)}

      </form>
    </div>
  );
};

export default StudentRegistrationForm;
