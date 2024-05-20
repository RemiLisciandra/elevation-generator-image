"use client";

export const Mainlayout = ({ children }) => {
  return (
    <main className="w-full flex justify-center items-center max-w-4xl px-4 py-8 max-lg:flex-col m-auto gap-8 lg:gap-16 min-h-screen">
      {children}
    </main>
  );
};

export default Mainlayout;
