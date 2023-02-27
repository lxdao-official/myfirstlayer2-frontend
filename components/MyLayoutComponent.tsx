export default function MyLayoutComponent({ meta, children }) {
  return (
    <>
      <p>author: {meta.author}</p>
      {children}
    </>
  );
}
