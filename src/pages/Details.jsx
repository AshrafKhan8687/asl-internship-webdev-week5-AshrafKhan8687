import { useParams, Link } from "react-router-dom";

function Details() {
  const { id } = useParams();

  return (
    <div>
      <h1>📍 Weather Details</h1>

      <div
        className="card"
        style={{
          textAlign: "center",
          padding: "40px 25px",
          background:
            "linear-gradient(135deg, #3b82f6, #60a5fa)",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: "55px",
            marginBottom: "15px",
          }}
        >
          🌤️
        </div>

        <h2
          style={{
            fontSize: "30px",
            marginBottom: "10px",
          }}
        >
          Weather Details
        </h2>

        <p
          style={{
            fontSize: "17px",
            opacity: "0.9",
            marginBottom: "25px",
          }}
        >
          Selected location ID: <strong>{id}</strong>
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.18)",
            borderRadius: "15px",
            padding: "20px",
            maxWidth: "500px",
            margin: "0 auto 25px",
          }}
        >
          <p style={{ marginBottom: "8px" }}>
            This is a dynamic React Router page.
          </p>

          <p style={{ margin: 0 }}>
            The <strong>:id</strong> value is received from the URL using
            <strong> useParams()</strong>.
          </p>
        </div>

        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "12px 25px",
            borderRadius: "25px",
            background: "white",
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Details;