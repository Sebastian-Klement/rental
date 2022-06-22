# BookingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

##Bycrypt
Bcrypt ist eine sichere Methode zur Speicherung von Passwörtern in der Datenbank.

Der allgemeine Arbeitsablauf für die Kontoregistrierung und -authentifizierung in einem hashbasierten Kontosystem sieht wie folgt aus:

    Zunächst kann der Benutzer ein Konto mit einer E-Mail oder einem Benutzernamen und einem Passwort erstellen.
    Das Passwort wird gehasht und in der Datenbank gespeichert. Zu keinem Zeitpunkt wird das Passwort im Klartext (unverschlüsselt) auf die Festplatte geschrieben.
    Wenn der Benutzer versucht, sich anzumelden, wird das eingegebene Kennwort mit dem Hash des echten Kennworts (das aus der Datenbank abgerufen wird) verglichen.
    Wenn die Hashes übereinstimmen, wird dem Benutzer der Zugang gewährt. Wenn nicht, wird dem Benutzer mitgeteilt, dass er ungültige Anmeldedaten eingegeben hat.

## Body-parser

Es ist eine Node.js Body-Parsing Middleware. Das body-parser Modul parst einen eingehenden Request Body in der Middleware vor Ihren Route Handlern, verfügbar unter der req.body Eigenschaft.

Das body-parser Objekt stellt verschiedene Fabriken zur Verfügung, um Middlewares zu erstellen.

Alle Middlewares füllen die req.body-Eigenschaft mit einem geparsten Body, wenn der Content-Type-Request-Header mit der Option type oder dem leeren Objekt ({}) übereinstimmt. Wenn es niemanden zum Parsen gibt, wird der Content-Type nicht gefunden, oder es tritt ein Fehler auf.

## cors

CORS ist ein Node.js-Paket zur Bereitstellung der Connect/Express-Middleware, mit der CORS mit verschiedenen Optionen aktiviert werden kann. Sie können zum Beispiel die Option origin verwenden, wenn Sie den AJAX-Zugriff auf einen einzigen Ursprung beschränken möchten.
` app.use(cors({ origin: 'http://angularjwtauth:4200' }));`

## express

Express.js, oder nur Express, ist das Webanwendungs-Framework für Node.js, das als freie und quelloffene Software veröffentlicht wird. Express ist das minimale und flexible Node.js-Webanwendungs-Framework, das eine Reihe robuster und einzigartiger Funktionen für Web- und mobile Anwendungen bietet.

## jsonwebtoken

jsonwebtoken ist die Implementierung von JSON-Web-Tokens in Node.js. Wenn sich der Benutzer also erfolgreich anmeldet, generiert dieses Modul ein Token auf der Grundlage der Benutzer-ID und des Benutzernamens und sendet es an den Client zurück.

## mongoose

Mongoose bietet eine unkomplizierte, schema-basierte Lösung zur Modellierung Ihrer Anwendungsdaten. Es enthält ein integriertes Type-Casting, Validierung, Abfrageerstellung, Business-Logik-Hooks und vieles mehr von Haus aus.

## nodemon

Nodemon ist ein Dienstprogramm, das alle Änderungen in Ihrem Quellcode überwacht und Ihren Server automatisch neu startet. Es ist perfekt für die Entwicklung von Webanwendungen in node.js.
