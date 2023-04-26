import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './chat.entity';
import { DATA } from './chat.mock';

@Injectable()
export class ChatService {
    constructor(@InjectRepository(Chat) private chatRepository: Repository<Chat>) {}
    // data = DATA;

    async getChatList():Promise<Chat[]> {
        return await this.chatRepository.find();
    }

    // getChat(chatId: number):Promise<any> {
    //     let id = Number(chatId);
    //     return new Promise(resolve => {
    //         const chat = this.data.find(chat => chat.id === id);
    //         if(!chat) {
    //             throw new HttpException('Chat does not exist', 404);
    //         }
    //         resolve(chat);
    //     })
    // }

    async addChat(chat: Chat):Promise<Chat> {
        return await this.chatRepository.save(chat);
    }

    // deleteChat(chatId: number):Promise<any> {
    //     return new Promise(resolve => {
    //         let index = this.data.findIndex(chat => chat.id = chatId);
    //         if(index === -1) {
    //             throw new HttpException('Chat does not exist', 404);
    //         }
    //         this.data.splice(index, 1);
    //         resolve(this.data);
    //     })
    // }
}
