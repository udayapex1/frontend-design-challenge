import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [fields, setFields] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const navigate = useNavigate();

  const validate = (values) => {
    const errs = {};
    if (!values.firstName.trim()) errs.firstName = "First name is required";
    if (!values.lastName.trim()) errs.lastName = "Last name is required";
    if (!values.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!values.password) {
      errs.password = "Password is required";
    } else if (values.password.length < 8) {
      errs.password = "Password must be at least 8 characters";
    }
    if (!agreed) errs.agreed = "You must agree to the Terms & Conditions";
    return errs;
  };

  const handleChange = (field) => (e) => {
    const updated = { ...fields, [field]: e.target.value };
    setFields(updated);
    if (touched[field]) {
      const errs = validate(updated);
      setErrors((prev) => ({ ...prev, [field]: errs[field] }));
    }
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errs = validate(fields);
    setErrors((prev) => ({ ...prev, [field]: errs[field] }));
  };

  const handleAgreeChange = () => {
    const next = !agreed;
    setAgreed(next);
    setTouched((prev) => ({ ...prev, agreed: true }));
    if (next) {
      setErrors((prev) => ({ ...prev, agreed: undefined }));
    } else {
      setErrors((prev) => ({ ...prev, agreed: "You must agree to the Terms & Conditions" }));
    }
  };

  const handleSubmit = () => {
    const allTouched = { firstName: true, lastName: true, email: true, password: true, agreed: true };
    setTouched(allTouched);
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      navigate("/dashboard");
    }
  };

  const fieldClass = (field) =>
    `w-full border rounded-lg px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder-gray-400 ${
      errors[field] && touched[field]
        ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400"
        : "border-gray-200 focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
    }`;

  const ErrorMsg = ({ field }) =>
    errors[field] && touched[field] ? (
      <p className="text-red-500 text-xs mt-1 ml-1">{errors[field]}</p>
    ) : null;

  return (
    <div className="noise min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-[#080d14] page-enter">

      <div className="absolute bottom-[-100px] right-[-50px] w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-orange-500 rounded-full blur-[130px] pointer-events-none" style={{ opacity: 0.55 }} />
      <div className="absolute bottom-[-50px] right-[80px] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] bg-red-600 rounded-full blur-[100px] pointer-events-none" style={{ opacity: 0.6 }} />
      <div className="absolute bottom-[100px] right-[300px] w-[200px] h-[200px] bg-yellow-600 rounded-full blur-[80px] pointer-events-none" style={{ opacity: 0.25 }} />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-teal-600 rounded-full blur-[100px] pointer-events-none" style={{ opacity: 0.35 }} />

      <div className="w-full lg:w-1/2 text-white px-8 lg:px-16 pt-8 pb-6 lg:py-12 flex flex-col justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-teal-400 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-wide">aps</span>
        </div>

        <div className="hidden lg:block mt-auto mb-auto">
          <h1 className="text-5xl font-bold leading-tight">
            Expert level Cybersecurity <br />
            in <span className="text-teal-400">hours</span> not weeks.
          </h1>
          <div className="mt-8">
            <p className="text-white font-semibold mb-4">What's included</p>
            <div className="space-y-3 text-gray-300 text-sm">
              <p className="flex items-start gap-3">
                <span className="text-teal-400 mt-0.5 font-bold">✓</span>
                Effortlessly spider and map targets to uncover hidden security flaws
              </p>
              <p className="flex items-start gap-3">
                <span className="text-teal-400 mt-0.5 font-bold">✓</span>
                Deliver high-quality, validated findings in hours, not weeks.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-teal-400 mt-0.5 font-bold">✓</span>
                Generate professional, enterprise-grade security reports automatically.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-6">
          <h1 className="text-3xl font-bold leading-tight">
            Expert level Cybersecurity{" "}
            in <span className="text-teal-400">hours</span> not weeks.
          </h1>
        </div>

        <div className="hidden lg:block">
          <p className="text-green-400 font-semibold text-sm">★ Trustpilot</p>
          <p className="text-white font-bold mt-1">
            Rated 4.5/5.0{" "}
            <span className="text-gray-400 font-normal text-sm">(100k+ reviews)</span>
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center relative z-10 px-6 py-8 lg:py-12">
        <div className="bg-white w-full max-w-[460px] rounded-2xl shadow-2xl p-8 lg:p-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900">Sign up</h2>
          <p className="text-center text-gray-600 mt-2 text-sm">
            Already have an account?{" "}
            <span
              className="text-teal-500 cursor-pointer font-medium hover:underline"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>

          <div className="mt-6 space-y-1">
            <div>
              <input
                type="text"
                placeholder="First name*"
                value={fields.firstName}
                onChange={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                className={fieldClass("firstName")}
              />
              <ErrorMsg field="firstName" />
            </div>

            <div className="pt-2">
              <input
                type="text"
                placeholder="Last name*"
                value={fields.lastName}
                onChange={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                className={fieldClass("lastName")}
              />
              <ErrorMsg field="lastName" />
            </div>

            <div className="pt-2">
              <input
                type="email"
                placeholder="Email address*"
                value={fields.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                className={fieldClass("email")}
              />
              <ErrorMsg field="email" />
            </div>

            <div className="pt-2">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password (8+ characters)*"
                  value={fields.password}
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                  className={`${fieldClass("password")} pr-11`}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <ErrorMsg field="password" />
            </div>

            <div className="pt-3">
              <div className="flex items-start gap-2 text-sm text-gray-500">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={handleAgreeChange}
                  className={`mt-0.5 accent-teal-500 w-4 h-4 cursor-pointer ${errors.agreed && touched.agreed ? "outline outline-1 outline-red-400 rounded" : ""}`}
                />
                <p className="leading-relaxed">
                  I agree to Aps's{" "}
                  <span className="text-teal-500 cursor-pointer hover:underline">Terms & Conditions</span>
                  {" "}and acknowledge the{" "}
                  <span className="text-teal-500 cursor-pointer hover:underline">Privacy Policy</span>
                </p>
              </div>
              <ErrorMsg field="agreed" />
            </div>

            <div className="pt-2">
              <button
                onClick={handleSubmit}
                className="w-full bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white py-3.5 rounded-full font-semibold transition text-sm hover:shadow-[0_0_20px_rgba(12,200,168,0.4)]"
              >
                Create account
              </button>
            </div>
          </div>

          <div className="flex justify-between mt-4 gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              <FaApple size={20} />
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition">
              <FcGoogle size={20} />
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] text-white py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition">
              <FaMeta size={20} />
            </button>
          </div>

          <div className="lg:hidden mt-6 text-center">
            <p className="text-green-500 font-semibold text-sm">★ Trustpilot</p>
            <p className="text-gray-700 font-bold text-sm mt-1">
              Rated 4.5/5.0{" "}
              <span className="text-gray-400 font-normal">(100k+ reviews)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}