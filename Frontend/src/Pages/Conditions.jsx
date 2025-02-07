import { Link } from "react-router-dom";

function Conditions() {
  return (
    <div className="w-full pt-[130px] min-[1024px]:pt-[200px] pb-[100px] min-h-screen bg-gradient-to-tr from-[#EFE6DD] to-[#FFC296]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6 text-[#8B5E3C]">
              Terms and Conditions
            </h1>
            <p className="text-gray-600 mb-4">
              Last updated: February 06, 2025
            </p>
            <div className="space-y-6 text-gray-700">
              <p>
                Please read these terms and conditions carefully before using
                Our Service.
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
              <p>For the purposes of these Terms and Conditions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Affiliate</strong> means an entity that controls, is
                  controlled by or is under common control with a party, where
                  "control" means ownership of 50% or more of the shares, equity
                  interest or other securities entitled to vote for election of
                  directors or other managing authority.
                </li>
                <li>
                  <strong>Country</strong> refers to: Bihar, India
                </li>
                <li>
                  <strong>Company</strong> (referred to as either "the Company",
                  "We", "Us" or "Our" in this Agreement) refers to Ornate Makeup
                  Studio & Academy, House No.-4E/9, North S.K.Puri, Patliputra,
                  Patna, Bihar.
                </li>
                <li>
                  <strong>Device</strong> means any device that can access the
                  Service such as a computer, a cellphone or a digital tablet.
                </li>
                <li>
                  <strong>Service</strong> refers to the Website.
                </li>
                <li>
                  <strong>Terms and Conditions</strong> (also referred as
                  "Terms") mean these Terms and Conditions that form the entire
                  agreement between You and the Company regarding the use of the
                  Service.
                </li>
                <li>
                  <strong>Third-party Social Media Service</strong> means any
                  services or content (including data, information, products or
                  services) provided by a third-party that may be displayed,
                  included or made available by the Service.
                </li>
                <li>
                  <strong>Website</strong> refers to Ornate Makeup Studio &
                  Academy, accessible from{" "}
                  <a
                    href="https://www.ornatemakeup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B5E3C] hover:underline"
                  >
                    https://www.ornatemakeup.com
                  </a>
                </li>
                <li>
                  <strong>You</strong> means the individual accessing or using
                  the Service, or the company, or other legal entity on behalf
                  of which such individual is accessing or using the Service, as
                  applicable.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#8B5E3C] mt-8">
                Acknowledgment
              </h2>
              <p>
                These are the Terms and Conditions governing the use of this
                Service and the agreement that operates between You and the
                Company. These Terms and Conditions set out the rights and
                obligations of all users regarding the use of the Service.
              </p>
              <p>
                Your access to and use of the Service is conditioned on Your
                acceptance of and compliance with these Terms and Conditions.
                These Terms and Conditions apply to all visitors, users and
                others who access or use the Service.
              </p>
              <p>
                By accessing or using the Service You agree to be bound by these
                Terms and Conditions. If You disagree with any part of these
                Terms and Conditions then You may not access the Service.
              </p>
              <p>
                You represent that you are over the age of 18. The Company does
                not permit those under 18 to use the Service.
              </p>
              <p>
                Your access to and use of the Service is also conditioned on
                Your acceptance of and compliance with the Privacy Policy of the
                Company. Our Privacy Policy describes Our policies and
                procedures on the collection, use and disclosure of Your
                personal information when You use the Application or the Website
                and tells You about Your privacy rights and how the law protects
                You. Please read Our Privacy Policy carefully before using Our
                Service.
              </p>

              {/* Add more sections here */}

              <h2 className="text-2xl font-semibold text-[#8B5E3C] mt-8">
                Contact Us
              </h2>
              <p>
                If you have any questions about these Terms and Conditions, You
                can contact us:
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

export default Conditions;
