const ImageGenerate = () => {
  return (
    <section className="container mx-auto ">
      <div className="flex justify-center items-center">
        <form className="py-10 ">
          <h6 className="footer-title">Generate Image</h6>
          <fieldset className="w-80">
            <label>Enter your Prompt</label>
            <div className="join">
              <input
                type="text"
                placeholder="enter your prompt .."
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Generate</button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default ImageGenerate;
