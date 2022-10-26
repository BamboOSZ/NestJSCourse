import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('coffees')
export class CoffeesController {
    @Get('flavours')
    findAll(@Res() response: Response) {
        response.status(200).send(`all coffees from response object`);
    }

    @Get('flavours/:id')
    findOne(@Param('id') id: string) {
        return `coffee #${id}`;
    }

    @Post('flavours')
    createFlavours(@Body('name') body: any, @Body('json') jsons: string) {
        return jsons;
    }

    @Post()
    @HttpCode(HttpStatus.GONE)
    create(@Body() body: any) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return `this will update ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `this will delete ${id}`;
    }
}
