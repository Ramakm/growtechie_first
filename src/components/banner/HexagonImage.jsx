import { Avatar } from "@mui/material";

export default function HexagonImage({ src, alt }) {
    return (
      <div className="clip-hexagon w-40 h-40 overflow-hidden">
        <Avatar
          alt={alt}
          src={src}
          sx={{
            width: "100%",
            height: "100%",
            objectPosition: "center",
            borderRadius: 0,
          }}
        />
      </div>
    );
  }
  