import Button from './Button';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="button-wrapper">
        <h2>Reusable Button Component Demo</h2>

        <Button
          label="Primary Button"
          variant="primary"
          size="medium"
          onClick={() => alert('Primary Button Clicked')}
        />

        <Button
          label="Secondary Button"
          variant="secondary"
          size="large"
          onClick={() => alert('Secondary Button Clicked')}
        />

        <Button
          label="Delete"
          variant="danger"
          size="small"
          onClick={() => alert('Danger Button Clicked')}
        />

        <Button
          label="Disabled"
          variant="primary"
          size="medium"
          disabled
        />
      </div>
    </div>
  );
}

export default App;
