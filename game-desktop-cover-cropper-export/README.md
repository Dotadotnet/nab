# Game Desktop Cover Cropper

Standalone React component copied from the game dashboard cropper.

## Files

- `DesktopCoverCropper.jsx`: crop modal component
- `Cross.jsx`: close icon used by the modal
- `index.js`: named export

## Usage

```jsx
import { useState } from "react";
import { DesktopCoverCropper } from "./game-desktop-cover-cropper-export";

export default function Example() {
  const [cropFile, setCropFile] = useState(null);
  const [preview, setPreview] = useState("");

  return (
    <>
      <input type="file" accept="image/*" onChange={(event) => setCropFile(event.target.files?.[0] || null)} />

      {preview ? <img alt="preview" src={preview} /> : null}

      <DesktopCoverCropper
        file={cropFile}
        onCancel={() => setCropFile(null)}
        onCrop={(file, previewUrl) => {
          setPreview(previewUrl);
          setCropFile(null);
          // Upload `file` with your form data.
        }}
      />
    </>
  );
}
```

The component uses Tailwind classes. If your target project does not use Tailwind, replace the `className` strings with your own CSS.
