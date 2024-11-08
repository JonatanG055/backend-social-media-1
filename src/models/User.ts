// models/user.ts
import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    name: string;
    nick: string;
    password: string;
    role: string;
    image?: string;
    created_at: Date;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    nick: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    image: { type: String, default: null },
    created_at: { type: Date, default: Date.now }
});

export default model<IUser>('User', userSchema);
