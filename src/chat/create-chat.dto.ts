export class CreateChatDto {
    readonly id: number;
    readonly sender: string;
    readonly recipient: string;
    readonly content: string;
    readonly createdAt: Date;
}