import React from 'react';
import { Link } from "react-router-dom";

const RightBanner = () => {
  return (
    <div className="w-full mt-40 lg:w-1/2 flex justify-center items-center relative">
      <div className="max-w-lg mx-auto text-left">
        <p className="text-lg leading-relaxed">
          BRIDGE2UNIVERSITY is a nonprofit organization that provides a platform for international university students to mentor senior high school students, guiding them in getting admissions and scholarships in different international universities and colleges. The organization connects disadvantaged high schoolers with volunteer mentors who have already navigated the overwhelming international university application process and can assist their young brothers and sisters.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          If you have a passion for mentoring and wish to use your valuable college application experience, please register and become a cause in transforming the lives of a student.
        </p>

        <div className="flex justify-end">
  <div className="bg-designColor mt-10 px-4 py-2 rounded-md text-white cursor-pointer hover:bg-designColorLight font-bodyFont">
    <Link to="/mentor">Be a Mentor</Link>
  </div>
</div>
      </div>
    </div>
  );
};

export default RightBanner;