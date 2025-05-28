import { Link } from 'react-router-dom';

const AuthForm = ({ title, subtitle, fields, buttonText, footer }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <h1 className="text-2xl font-semibold text-[#232323]">{title}</h1>
        <p className="text-sm text-gray-500 mb-2">{subtitle}</p>

        {fields.includes('name') && (
          <>
            <label>Full Name</label>
            <input
              type="text"
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
              required
            />
          </>
        )}

        <label>Email</label>
        <input
          type="email"
          className="border border-[#DADADA] rounded w-full p-2 mt-1"
          required
        />

        <label>Password</label>
        <input
          type="password"
          className="border border-[#DADADA] rounded w-full p-2 mt-1"
          required
        />

        <button className="bg-primary text-white w-full py-2 my-2 rounded-md text-base">
          {buttonText}
        </button>

        <span className="text-center w-full text-sm">
          {footer.text}{' '}
          <Link to={footer.linkTo} className="text-primary hover:underline">
            {footer.linkLabel}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default AuthForm;