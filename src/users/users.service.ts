import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async getAllUsers(): Promise<any> {
        return "all users here"
    }

    async getUserById(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async createUser(user: User): Promise<User> {
        const newUser = new this.userModel(user);
        return newUser.save();
    }
}
