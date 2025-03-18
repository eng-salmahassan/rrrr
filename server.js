const express = require('express');
const path = require('path');
const app = express();

// تغيير البورت إلى 3001
const PORT = 3001;

// إعداد static files (مثل HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// بدء السيرفر
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
