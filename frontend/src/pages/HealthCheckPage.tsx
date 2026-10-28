import { useEffect, useState } from "react";
import { apiRequest } from "../api/client";

export default function HealthCheckPage() {
  const [status, setStatus] = useState("Checking...");
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest<{ status: string }>("/health")
      .then((data) => setStatus(data.status))
      .catch(() => setError("Backend connection failed."));
  }, []);

  return (
    <main>
      <h1>Backend Connection</h1>
      <p>Status: {status}</p>
      {error && <p role="alert">{error}</p>}
    </main>
  );
}