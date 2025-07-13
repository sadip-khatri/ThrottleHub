import app from './app'
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use('/',(req,res)=>{
  res.send('hello , welcome to 246 Impex')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
