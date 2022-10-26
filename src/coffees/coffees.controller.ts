import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get('flavours')
    findAll() {
        return `all coffees`;
    }

    @Get('flavours/:id')
    findOne(@Param('id') id: string) {
        return `coffee #${id}`;
    }

    @Post('flavours')
    createFlavours(@Body('name') body, @Body('json') jsons) {
        return jsons;
    }

    @Post()
    create(@Body() body) {
        return body;
    }
}
