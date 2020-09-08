import app from './App';
import CONFIG from './config/config';

const PORT = CONFIG.PORT;

app.listen(PORT, err => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server is listening on http://127.0.0.1:${PORT}`);
});
