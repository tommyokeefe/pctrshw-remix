export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <p>&copy; Pictureshow Productions, {year}</p>
    </footer>
  );
}
