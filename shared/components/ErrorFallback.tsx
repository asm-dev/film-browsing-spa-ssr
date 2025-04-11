type ErrorFallbackProps = {
  error: Error;
  reset?: () => void;
  useMock?: () => void;
};

export default function ErrorFallback({
  error,
  reset,
  useMock,
}: ErrorFallbackProps) {
  return (
    <div>
      <h2>Algo salió mal</h2>
      <p>{error?.message || "Error desconocido."}</p>

      <div>
        {reset && <button onClick={reset}>Reintentar</button>}
        {useMock && <button onClick={useMock}>Cargar datos mock</button>}
      </div>
    </div>
  );
}
