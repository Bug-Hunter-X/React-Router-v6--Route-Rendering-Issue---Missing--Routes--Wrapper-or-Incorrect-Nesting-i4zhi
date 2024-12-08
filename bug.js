```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses `BrowserRouter`, `Routes`, and `Route` from `react-router-dom` v6.  A common error is to forget to wrap all your routes within the `<Routes>` component. If any routes are outside, they will not render correctly and lead to unexpected behavior, especially with nested routes.