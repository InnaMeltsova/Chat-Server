import { HttpException, Injectable } from '@nestjs/common';
import { DATA } from './chat.mock';

@Injectable()
export class ChatService {
    data = DATA;

    getChatList():Promise<any> {
        return new Promise(resolve => {
            resolve(this.data);
        })
    }

    getChat(chatId: number):Promise<any> {
        let id = Number(chatId);
        return new Promise(resolve => {
            const chat = this.data.find(chat => chat.id === id);
            if(!chat) {
                throw new HttpException('Chat does not exist', 404);
            }
            resolve(chat);
        })
    }

    addChat(chat):Promise<any> {
        return new Promise(resolve => {
            this.data.push(chat);
            resolve(this.data);
        })
    }

    deleteChat(chatId: number):Promise<any> {
        return new Promise(resolve => {
            let index = this.data.findIndex(chat => chat.id = chatId);
            if(index === -1) {
                throw new HttpException('Chat does not exist', 404);
            }
            this.data.splice(index, 1);
            resolve(this.data);
        })
    }
}
