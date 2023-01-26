import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
  createBoard(title: string, description: string) {
    const board: Board = {
    id:
      title: title,
      description: description,
      status: BoardStatus.PUBLIC,
    };
  }
}
