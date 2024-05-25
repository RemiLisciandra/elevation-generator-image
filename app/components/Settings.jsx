"use client";

import FileInput from "./input/FileInput";
import { RangeInput } from "./input/RangeInput";

export const Settings = ({ setImage, setSettings, settings }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = function () {
      const img = new Image();
      img.onload = function () {
        setImage({
          height: img.height,
          width: img.width,
          src: img.src,
          name: file.name,
        });
      };
      img.src = fileReader.result;
    };
    fileReader.readAsDataURL(file);
  };

  const setSetting = (name, value) => {
    setSettings((curr) => ({
      ...curr,
      [name]: value,
    }));
  };

  return (
    <section className="flex-1 flex items-center">
      <div className="bg-gray-100 rounded-lg p-5 w-full shadow-xl">
        <div className="my-3">
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
        <div className="flex flex-col gap-4">
          <FileInput onChange={handleFileChange} />
          <RangeInput
            title="Padding"
            name="padding"
            value={settings.padding}
            onChange={(e) => setSetting("padding", e.target.value)}
          />
          <RangeInput
            title="Shadow"
            name="shadow"
            value={settings.shadow}
            onChange={(e) => setSetting("shadow", e.target.value)}
          />
          <RangeInput
            title="Radius"
            name="radius"
            value={settings.radius}
            onChange={(e) => setSetting("radius", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default Settings;
