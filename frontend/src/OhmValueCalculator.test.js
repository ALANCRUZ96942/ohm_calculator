import {render,screen,fireEvent} from '@testing-library/react';
import OhmValueCalculator from './components/OhmValueCalculator';
import {getResistorsByTolerance,getResistorsByFigure,getResistorsByMultipler} from './services/api'

describe("Api requests", () => {
  test('tolerances', async () => {
      const tolerances = [{"name":"Silver","color":"#c0c0c0","multipler":0.01,"tolerance":10},
      {"name":"Gold","color":"#ffd700","multipler":0.1,"tolerance":5},
      {"name":"Brown","color":"#7e4b26","multipler":10,"tolerance":1},
      {"name":"Red","color":"#a72920","multipler":100,"tolerance":2},
      {"name":"Orange","color":"#f67828","multipler":1000,"tolerance":3},
      {"name":"Yellow","color":"#f6b600","multipler":10000,"tolerance":4},
      {"name":"Green","color":"#61993b","multipler":100000,"tolerance":0.5},
      {"name":"Blue","color":"#007cb0","multipler":1000000,"tolerance":0.25},
      {"name":"Violet","color":"#76689a","multipler":10000000,"tolerance":0.1},
      {"name":"Gray","color":"#7a888e","multipler":100000000,"tolerance":0.05}];
      const data = await getResistorsByTolerance();
      expect(data).toMatchObject(tolerances);
    });
    

    test('figures', async () => {
      const figures = [{"name":"Black","color":"#000000","multipler":1},
      {"name":"Brown","color":"#7e4b26","multipler":10},
      {"name":"Red","color":"#a72920","multipler":100},
      {"name":"Orange","color":"#f67828","multipler":1000},
      {"name":"Yellow","color":"#f6b600","multipler":10000},
      {"name":"Green","color":"#61993b","multipler":100000},
      {"name":"Blue","color":"#007cb0","multipler":1000000},
      {"name":"Violet","color":"#76689a","multipler":10000000},
      {"name":"Gray","color":"#7a888e","multipler":100000000},
      {"name":"White","color":"#FFFFFF","multipler":1000000000}];
      const data = await getResistorsByFigure();
      expect(data).toMatchObject(figures);
    });
    

    test('multiplers', async () => {
      const multiplers = [{"name":"Pink","color":"#d8a0a6","multipler":0.001},
      {"name":"Silver","color":"#c0c0c0","multipler":0.01},
      {"name":"Gold","color":"#ffd700","multipler":0.1},
      {"name":"Black","color":"#000000","multipler":1},
      {"name":"Brown","color":"#7e4b26","multipler":10},
      {"name":"Red","color":"#a72920","multipler":100},
      {"name":"Orange","color":"#f67828","multipler":1000},
      {"name":"Yellow","color":"#f6b600","multipler":10000},
      {"name":"Green","color":"#61993b","multipler":100000},
      {"name":"Blue","color":"#007cb0","multipler":1000000},
      {"name":"Violet","color":"#76689a","multipler":10000000},
      {"name":"Gray","color":"#7a888e","multipler":100000000},
      {"name":"White","color":"#FFFFFF","multipler":1000000000}];
      const data = await getResistorsByMultipler();
      expect(data).toMatchObject(multiplers);
    });
      

});



describe("Render resistances",() => {
  test('resistance 4 bands',  () => {
      render(<OhmValueCalculator tolerance={4}/>)
      const band1=screen.getByTestId('band1');
      const band2=screen.getByTestId('band2');
      const band3=screen.getByTestId('band3');
      const band4=screen.getByTestId('band4');
      fireEvent.click(band1);
      fireEvent.click(band2);
      fireEvent.click(band3);
      fireEvent.click(band4);

    });
    test('resistance 5 bands',  () => {
      render(<OhmValueCalculator tolerance={5}/>)
      const band1=screen.getByTestId('band1');
      const band2=screen.getByTestId('band2');
      const band3=screen.getByTestId('band3');
      const band4=screen.getByTestId('band4');
      const band5=screen.getByTestId('band5');
      fireEvent.click(band1);
      fireEvent.click(band2);
      fireEvent.click(band3);
      fireEvent.click(band4);
      fireEvent.click(band5);

    });
});


