"use client";

import { RangeInput } from "./input/RangeInput";
import { FileInput } from "./input/FileInput";

export const Settings = () => {
  return (
    <section className="flex-1 flex items-center">
      <div className="bg-gray-100 rounded-lg p-5 w-full shadow-xl">
        <div className="my-3">
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
        <div className="flex flex-col gap-4">
          <FileInput title="File" />
          <RangeInput max={99} title="Padding" />
          <RangeInput max={99} title="Shadow" />
          <RangeInput max={99} title="Radius" />
        </div>
      </div>
    </section>
  );
};

export default Settings;
