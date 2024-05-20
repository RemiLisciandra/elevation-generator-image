"use client";

export const Settings = ({ children }) => {
  return (
    <section className="flex-1 flex items-center">
      <div className="bg-gray-100 rounded-lg p-5 w-full shadow-xl">
        <div className="my-3">
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </section>
  );
};

export default Settings;
