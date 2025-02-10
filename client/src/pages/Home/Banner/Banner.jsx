import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hi, I am Pic-Seek</h1>
          <p className="py-6">
            I help you create/generate images according you need
          </p>
          <Link to="/generate-image">
            <button className="btn btn-primary">Generate Image</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
