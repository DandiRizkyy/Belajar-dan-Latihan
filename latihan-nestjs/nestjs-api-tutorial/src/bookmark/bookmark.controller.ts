import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../../src/auth/guard';
import { BookmarkService } from './bookmark.service';
import { GetUser } from '../../src/auth/decorator';
import { CreateBookmarkDto, EditBookmarkDto} from './dto';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
    constructor(private bookmarkServices: BookmarkService){}
    @Get()
    getBookmarks(@GetUser('id') userId: number){
        return this.bookmarkServices.getBookmarks(
            userId,
        );
    }

    @Get(':id')
    getBookmarksById(
    @GetUser('id') userId: number, @Param('id', ParseIntPipe) bookmarkId: number){
        return this.bookmarkServices.getBookmarksById(
            userId,
            bookmarkId
        ); 
    }

    @Post()
    createBookmark(@GetUser('id') userId: number, @Body() dto: CreateBookmarkDto){
        return this.bookmarkServices.createBookmark(
            userId,
            dto,
        );
    }

    @Patch(':id')
    editBookmarksById(@GetUser('id') userId: number, @Body() dto: EditBookmarkDto, @Param('id', ParseIntPipe) bookmarkId: number){
        return this.bookmarkServices.editBookmarksById(
            userId,
            bookmarkId,
            dto
        );
    }

    @Delete(':id')
    deleteBookmarksById(@GetUser('id') userId: number, @Param('id', ParseIntPipe) bookmarkId: number){
        return this.bookmarkServices.deleteBookmarksById(userId, bookmarkId);
    }
}
