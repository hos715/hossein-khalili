import { ImageResponse } from "next/og";

export const alt = "Hossein Khalili — React & Next.js Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -1 }}>
          Hossein Khalili
        </div>
        <div style={{ marginTop: 24, fontSize: 32, color: "#94a3b8" }}>
          Front-End Developer · React / Next.js
        </div>
      </div>
    ),
    { ...size },
  );
}
