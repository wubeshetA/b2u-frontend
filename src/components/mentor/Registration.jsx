import React, { useState } from 'react';
import axios from 'axios';


const BaseUrl = 'https://b2u-backend.vercel.app';
const MentorRegistrationForm = () => {
  const initialFormData = {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    university: '',
    nationality: '',
    major: '',
    essay1: '',
    essay2: '',
    essay3: '',
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

  



  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { ...formData };
  
    try {
      setLoading(true); // Start loading animation
      const response = await axios.post(`${BaseUrl}/registrar/mentors/`, postData);



      alert('Your application has been submitted successfully! Thank you for your willingness to help a student. We will contact you soon.');
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
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Mentor Registration</h2>

      
      <div className="col-span-3">
        
        <p>The following questions help us to understand you well and match you with a student who needs your help best. Please provide us with as much information us you can (you can go beyond the word limit if necessary) </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">


      <div className='mb-4 col-span-3 mt-20'>
        <h3><b>Personal information:</b></h3>
        </div>
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
          type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        {/* Nationality */}
        <div className="mb-4 col-span-1">
          <label htmlFor="nationality" className="block text-sm font-medium">
            Nationality
          </label>
          <input
          type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        {/* School */}
        <div className="mb-4 col-span-1">
          <label htmlFor="university" className="block text-sm font-medium">
            University
          </label>
          <input
            type="text"
            id="university"
            name="university"
            value={formData.university}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>


        {/* Major  */}
        <div className="mb-4 col-span-1">
          <label htmlFor="major" className="block text-sm font-medium">
            Major
          </label>
          <input
            type="text"
            id="major"
            name="major"
            value={formData.major}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>


    
        <div className='mb-4 col-span-3 mt-20'>
        <h3><b>Supplemental questions </b></h3>
        </div>


        <div className="mb-4 col-span-3">
        
          <p>The following questions help us to understand you well and match you with a student who needs your help best. Please provide us with as much information us you can (you can go beyond the word limit if necessary) </p>
        </div>

         {/* essay1 */}
         <div className="mb-4 col-span-3">
          <label htmlFor="essay1" className="block text-sm font-medium">
          What drives you to mentor students  (50 - 200 words) * 
          </label>
          <textarea
          type="text"
            id="essay1"
            name="essay1"
            value={formData.essay1}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            rows="2"
            required
          />
        </div>

         {/* essay2 */}
         <div className="mb-4 col-span-3">
          <label htmlFor="essay2" className="block text-sm font-medium">
          Tell us how you get to the university you are
studying now. Tell us if you have taken any standardized test,
if anyone helped you through the process, etc (50 - 200 words) * 
          </label>
          <textarea
            id="essay2"
            name="essay2"
            value={formData.essay2}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            rows="2"
            required
          />
        </div>


         {/* essay3 */}
        <div className="mb-4 col-span-3">
          <label htmlFor="essay3" className="block text-sm font-medium">
          Anything you would like to tell us?
          </label>
          <textarea
            id="essay3"
            name="essay3"
            value={formData.essay3}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            rows="2"
            required
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

export default MentorRegistrationForm;
