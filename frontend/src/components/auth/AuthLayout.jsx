import AuthBanner from "./AuthBanner";

const AuthLayout = ({ children }) => {
  return (
    <section className="min-h-screen bg-black">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Banner */}
        <AuthBanner />

        {/* Right Form */}
        <div className="flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
