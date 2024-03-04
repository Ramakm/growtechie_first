import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Avatar from "@mui/material/Avatar";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function ImageInput({ inputData, handleChange, formData }) {
  const src = formData[inputData.name];

  function checkSrc() {
    try {
      return URL.createObjectURL(src);
    } catch (error) {
      return false;
    }
  }

  return (
    <div className={`w-fit z-10`}>
      <Avatar
        alt="User"
        src={checkSrc() ? URL.createObjectURL(src) : src}
        sx={{ width: 120, height: 120, marginBottom: 2, marginInline: "auto" }}
      />
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        className="w-fit"
      >
        Upload Your Image
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          name={inputData.name}
          onChange={handleChange}
        />
      </Button>
    </div>
  );
}
