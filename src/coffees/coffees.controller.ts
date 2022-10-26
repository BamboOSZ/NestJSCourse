import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) { }

    @Get('flavours')
    findAllFlavours(@Res() response: Response) {
        response.status(200).send(`all coffees from response object`);
    }

    @Get()
    findAll(@Query() paginationQuery) {
        return this.coffeesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.coffeesService.findOne(id);
    }

    @Post('flavours')
    createFlavours(@Body('name') body: any, @Body('json') jsons: string) {
        return jsons;
    }

    @Post()
    create(@Body() body: any) {
        return this.coffeesService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return this.coffeesService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id);
    }
}
