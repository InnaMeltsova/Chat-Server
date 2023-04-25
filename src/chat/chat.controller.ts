import { Controller, Get, Post, Delete, Param, Body, Query } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService) {}

    @Get()
    async getChatList() {
        return await this.chatService.getChatList();
    }

    @Get(':chatId')
    async getChat(@Param('chatId') chatId: number) {
        return await this.chatService.getChat(chatId);
    }

    @Delete()
    async deleteChat(@Query() query) {
        return this.chatService.deleteChat(query.chatId);
    }
}
