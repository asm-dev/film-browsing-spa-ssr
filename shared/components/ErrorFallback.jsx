export default function ErrorFallback({ error, reset }) {
  return (
    <div>
      <h2>Ooops</h2>
      <p>{error?.message || "Error desconocido."}</p>

      {reset && <button onClick={reset}>Volver a intentar</button>}
    </div>
  );
}
