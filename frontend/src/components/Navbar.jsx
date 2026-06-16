function Navbar() {
  return (
    <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="max-w-7.5xl mx-auto px-8 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
          Student Management System
          </h1>

          <p className="text-sm opacity-90 mt-1">
               Junior Software Developer Assessment
          </p>
        </div>

        <div className="text-right">
          <p className="font-semibold">
            Admin Panel
          </p>

          <p className="text-sm opacity-80">
            Pillai University
          </p>
        </div>

      </div>
    </div>
  );
}

export default Navbar;