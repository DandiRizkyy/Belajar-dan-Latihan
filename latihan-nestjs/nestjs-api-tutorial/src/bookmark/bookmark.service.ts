import { Injectable } from '@nestjs/common';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
import { PrismaService } from '../../src/prisma/prisma.service';
import { Prisma } from '@prisma/client';


@Injectable()
export class BookmarkService {
    constructor(private prisma: PrismaService){}

    getBookmarks(userId: number){
        return this.prisma.bookmark.findMany({
            where: {
                userId
            }
        })
    }

    getBookmarksById(userId: number, bookmarkId: number){}

    async createBookmark(userId: number, dto: CreateBookmarkDto){
        const bookmark = await this.prisma.bookmark.create({
            data: {
                userId,
                ...dto
            },
        });
        return bookmark; 
    }

    editBookmarksById(userId: number, bookmarkId: number, dto: EditBookmarkDto){}

    deleteBookmarksById(userId: number, bookmarkId: number){}
}
