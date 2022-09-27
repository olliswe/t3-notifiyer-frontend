import { PaperAirplaneIcon, MailIcon } from "@heroicons/react/outline";
import { useState, ChangeEvent } from "react";
import { Rings } from "react-loader-spinner";
import { API_URL } from "../utils/constants";

const SignupButton = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSuccess(false);
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(false);
    setSuccess(false);
    setError("");
    const response = await fetch(`${API_URL}/signup-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    setLoading(false);

    if (response.status === 201) {
      setEmail("");
      setSuccess(true);
      return;
    }
    setError(data?.error.toString());
  };

  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Signup to updates via email
      </label>
      <div className="flex mt-1 gap-x-2 items-center">
        <div className="flex rounded-md shadow-sm w-[500px]">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            disabled={!email || loading}
            onClick={handleSubmit}
          >
            <PaperAirplaneIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>Submit</span>
          </button>
        </div>
        <Rings
          height="30"
          width="30"
          color="#6366f1"
          radius="4"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loading}
          ariaLabel="rings-loading"
        />
        {success && <span className="text-green-500">Success!</span>}
        {error && <span className="text-red-500">{error}</span>}
      </div>
    </div>
  );
};

export default SignupButton;
