import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="centerContainer">
      <h1>This is the about page!</h1>
      <Link to="/">
        <Button variant="contained">Go to the main page</Button>
      </Link>
    </div>
  )
}