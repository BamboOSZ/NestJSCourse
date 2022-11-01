import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

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
    findOne(@Param('id') id: number) {
        console.log(typeof id);
        return this.coffeesService.findOne(' ' + id);
    }

    @Post('flavours')
    createFlavours(@Body('name') name: string, @Body('json') jsons: string) {
        return jsons;
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        console.log(createCoffeeDto instanceof CreateCoffeeDto);
        return this.coffeesService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id);
    }
}
