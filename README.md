# PeriodicTable

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3 and is build in [GitHub Pages](dominikarz.github.io/periodic-table/browser/index.html). It is also deployed on my [private server](https://projects.wmarzeniach.com/periodic-table/).

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Task description in Polish language:

Przygotuj widok wyświetlający tabelę pierwiastków (kolumny Number, Name, Weight, Symbol). Zasymuluj pobieranie danych do tabeli podczas startu aplikacji. Dodaj możliwość edycji dowolnej wartości rekordu wyświetlonego w tabeli (popup + input do zmiany wartości). Po zatwierdzeniu zmiany, wiersz tabeli powinien się zaktualizować. Dodaj filtr, który pozwoli na filtrowanie wyników (jeden input filtrujący po wszystkich polach). Filtrowanie powinno odbywać się po 2s bez zmiany wartości w inpucie.

Jako dane początkowe użyj
const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
{position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
{position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
{position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
{position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
{position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
{position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
{position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
{position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

Jako bibliotekę do komponentów użyj https://material.angular.io/ Zadanie do napisania w Angular 20
SignalStore
Nie piszemy testów do kodu
