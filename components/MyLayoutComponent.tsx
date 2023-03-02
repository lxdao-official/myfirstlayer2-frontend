export default function MyLayoutComponent({ meta, children }: any) {
  return (
    <>
      <p>author: {meta.author}</p>
      {children}
    </>
  );
}
