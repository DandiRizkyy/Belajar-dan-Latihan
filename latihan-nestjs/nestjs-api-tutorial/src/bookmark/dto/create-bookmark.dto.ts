import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateBookmarkDto{

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string | null;

    @IsString()
    @IsNotEmpty()
    link: string;

   
}