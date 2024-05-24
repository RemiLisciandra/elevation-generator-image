"use client";

import { RangeInput } from "./input/RangeInput";
import { FileInput } from "./input/FileInput";

export const Settings = ({
  onImageChange,
  padding,
  radius,
  shadow,
  setPadding,
  setRadius,
  setShadow,
  fileName,
  setFileName,
}) => {
  const handleFileSelect = (fileData, name) => {
    onImageChange(fileData);
    setFileName(name);
  };

  return (
    <section className="flex-1 flex items-center">
      <div className="bg-gray-100 rounded-lg p-5 w-full shadow-xl">
        <div className="my-3">
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
        <div className="flex flex-col gap-4">
          <FileInput title={fileName} onFileSelect={handleFileSelect} />
          <RangeInput
            max={99}
            title="Padding"
            value={parseInt(padding)}
            onChange={(e) => setPadding(e.target.value + "px")}
          />
          <RangeInput
            max={99}
            title="Shadow"
            value={shadow}
            onChange={(e) => setShadow(e.target.value)}
          />
          <RangeInput
            max={99}
            title="Radius"
            value={parseInt(radius)}
            onChange={(e) => setRadius(e.target.value + "px")}
          />
        </div>
      </div>
    </section>
  );
};

export default Settings;
