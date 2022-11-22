import {Schema, model} from "mongoose";

type User = {
    uid: number,
    account: string,
    password: string,
    name: string
}

const UserSchema = new Schema<User>({
    uid: {type: Number, required: true},
    account: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true}
})

const UserModel = model<User>('user', UserSchema, 'user');

export default UserModel;