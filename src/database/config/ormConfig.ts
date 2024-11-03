export function ormConfig(): any {
    return {
        url: "mongodb+srv://kaly100diallo:qbvU9e2m6bOunXif@cluster0.rlhxa.mongodb.net/enens?retryWrites=true&w=majority&appName=Cluster0",
        type: 'mongodb',
        synchronize: true,
        logging: false,
        autoLoadEntities: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        keepConnectionAlive: true,
        connectTimeout: null,
        acquireTimeout: null,
        extra: {
        connectionLimit: null,
        },
        entities: [__dirname+'../**/*.entity{.js,.ts}'],
        migrations: ['dist/database/migrations/*.js'],
    }
}
