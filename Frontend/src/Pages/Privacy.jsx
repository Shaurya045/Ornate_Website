import { Link } from "react-router-dom";

function Privacy() {
  return (
    <div className="w-full pt-[130px] min-[1024px]:pt-[200px] pb-[100px] min-h-screen bg-gradient-to-tr  from-[#EFE6DD] to-[#FFC296]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6 text-[#8B5E3C]">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-4">
              Last updated: February 06, 2025
            </p>
            <div className="space-y-6 text-gray-700">
              <p>
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
              </p>
              <p>
                We use Your Personal data to provide and improve the Service. By
                using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold text-[#8B5E3C] mt-8">
                Interpretation and Definitions
              </h2>
              <h3 className="text-xl font-semibold text-[#8B5E3C] mt-4">
                Interpretation
              </h3>
              <p>
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>

              <h3 className="text-xl font-semibold text-[#8B5E3C] mt-4">
                Definitions
              </h3>
              <p>For the purposes of this Privacy Policy:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account</strong> means a unique account created for
                  You to access our Service or parts of our Service.
                </li>
                <li>
                  <strong>Affiliate</strong> means an entity that controls, is
                  controlled by or is under common control with a party, where
                  "control" means ownership of 50% or more of the shares, equity
                  interest or other securities entitled to vote for election of
                  directors or other managing authority.
                </li>
                <li>
                  <strong>Company</strong> (referred to as either "the Company",
                  "We", "Us" or "Our" in this Agreement) refers to Ornate Makeup
                  Studio & Academy, House No.-4E/9, North S.K.Puri, Patliputra,
                  Patna, Bihar.
                </li>
                {/* Add more list items for other definitions */}
              </ul>

              {/* Add more sections here */}

              <h2 className="text-2xl font-semibold text-[#8B5E3C] mt-8">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, You can
                contact us:
              </p>
              <ul className="list-disc pl-6">
                <li>By email: ornatepayal@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-center py-8">
        <Link to="/" className="text-[#8B5E3C] hover:underline">
          Back to Home
        </Link>
      </div> */}
    </div>
  );
}

export default Privacy;
