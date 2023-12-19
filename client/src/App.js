function App() {
  const InputClass =
    "w-full py-4 placeholder:text-gray px-6 text-main border-2 mt-2 border-boder rounded-md";

  return (
    <div className="container py-12 mx-auto min-h-screen sm:py-2 px-4">
      <div className="main-box lg-w-3/4 w-full flex box-shadow rounded-lg overflow-hidden">
        <div className="box-1 bg-main flex-colo py-6 sm:py-0">
          <img
            src="/favicon.png"
            className="w-16 h-16 object-cover"
            alt="logo"
          />
          <h1 className="my-4 text-xl">ShoeShop</h1>
          <p className="italic text-sm">
            We detected you are <br /> current in
            <span className="font-bold">Tanzaia</span>
          </p>
        </div>
        <from className="box-2 bg-white pt-12 pb-6 sm:px-12 px-6">
          <h2 className>Contact Us</h2>
          {/* Full Name */}
          <div className="my-6">
            <label>FullName</label>
            <input
              required
              type="text"
              placeholder="User Doe"
              className={InputClass}
            />
          </div>
          {/* Email */}
          <div className="my-6">
            <label>Email</label>
            <input
              required
              type="email"
              placeholder="example@gmail.com"
              className={InputClass}
            />
          </div>
          {/* Phone */}
          <div className="my-6">
            <label>Phone</label>
            <div className="grid gap-3 grid-cols-12 border-2 mt-2 border-boder rounded-md w-full px-2">
              <select className="col-span-3 bg-main py-3 px-2 my-2 text-sm rounded">
                <option>VietNam</option>
                <option>USA</option>
                <option>Japan</option>
              </select>
              <div className="tracking-widest col-span-2 border-x-2 border-border flex0-colo">+84</div>
            </div>
          </div>
        </from>
      </div>
    </div>
  );
}

export default App;
