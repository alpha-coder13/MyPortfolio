const  {Pool}=  require('pg');

// const clientConfig ={
//   user?: string, // default process.env.PGUSER || process.env.USER
//   password?: string or function, //default process.env.PGPASSWORD
//   host?: string, // default process.env.PGHOST
//   port?: number, // default process.env.PGPORT
//   database?: string, // default process.env.PGDATABASE || user
//   connectionString?: string, // e.g. postgres://user:password@host:5432/database
//   ssl?: any, // passed directly to node.TLSSocket, supports all tls.connect options
//   types?: any, // custom type parsers
//   statement_timeout?: number, // number of milliseconds before a statement in query will time out, default is no timeout
//   query_timeout?: number, // number of milliseconds before a query call will timeout, default is no timeout
//   lock_timeout?: number, // number of milliseconds a query is allowed to be en lock state before it's cancelled due to lock timeout
//   application_name?: string, // The name of the application that created this Client instance
//   connectionTimeoutMillis?: number, // number of milliseconds to wait for connection, default is no timeout
//   keepAliveInitialDelayMillis?: number, // set the initial delay before the first keepalive probe is sent on an idle socket
//   idle_in_transaction_session_timeout?: number, // number of milliseconds before terminating any session with an open idle transaction, default is no timeout
//   client_encoding?: string, // specifies the character set encoding that the database uses for sending data to the client
//   fallback_application_name?: string, // provide an application name to use if application_name is not set
//   options?: string // command-line options to be sent to the server
// }

const messagesPool = new Pool({
    user:process.env.POSTGRES_USERNAME,
    password:process.env.POSTGRES_PASSWORD,
    host:process.env.POSTGRES_HOST,
    port:process.env.POSTGRES_PORT,
    database:process.env.POSTGRES_DB_NAME_MESSAGES,
    query_timeout:3000,
})

const writeValues = (...values) => ({
    text : "INSERT INTO messages(name, em) VALUES($1,$2,$3)",
    values:[...values],
})


module.exports = {messagesPool, writeValues};