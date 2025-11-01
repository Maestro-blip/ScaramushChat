# Node.js Terminal Chat 💬

A simple, real-time (client-server) chat application that runs directly in your terminal. This project is built from scratch using only Node.js core modules.

## Features

* **Client-Server Architecture:** A dedicated `server.js` handles connections and a `client.js` connects to it.
* **Real-Time Communication:** Uses Node.js `net` ( sockets) for instant message delivery.
* **CLI Options:** Both client and server use `commander` for easy configuration of host, port, and usernames via command-line flags.
* **Connection Handling:** Gracefully handles client disconnects.

## Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Maestro-blip/ScaramushChat.git)
    cd ScaramushChat
    ```

2.  **Install dependencies:**
    This project uses `commander` to manage command-line arguments.
    ```bash
    npm install commander
    ```

## Usage

You will need two separate terminal windows: one for the server and one for the client.

### 1. Run the Server

First, start the server. It will wait for clients to connect.

* `--host <address>`: The address to bind to. Use `localhost` for local testing or `0.0.0.0` to allow other computers on your network to connect.
* `--port <port>`: The port to listen on.
* `--sn [name]`: (Optional) A name for the server.

**Example (local testing):**
```bash
node server.js --host localhost --port 8000
