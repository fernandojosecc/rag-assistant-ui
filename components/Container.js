export default function Container({ children, style = {}, maxWidth = '1200px' }) {
  return (
    <div style={{
      maxWidth: maxWidth,
      margin: '0 auto',
      padding: '0 1rem',
      ...style
    }}>
      {children}
    </div>
  );
}
