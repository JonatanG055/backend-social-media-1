import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://jonatan:ixYlrmr86UGG1Stx@dbd.r6k7h5w.mongodb.net/BACKEND-SOCIAL-MEDIA');
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', (error as any).message);
  }
};

export default connectDB;
