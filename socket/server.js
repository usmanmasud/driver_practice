const express = require("express");
const { WebSocketServer } = require("ws");
const geolib = require("geolib");

const app = express();
const PORT = 4000;

//store drivers locations

let drivers = {};

// create websocket server

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message);
      console.log("Recieves Message:", data); //debugging line

      if (data.type === "locationUpdate" && data.role === "driver") {
        drivers[data.driver] = {
          latitude: data.latitude,
          longitude: data.longitude,
        };

        console.log("Updated driver location:", drivers[data.driver]);
      }

      if (data.type === "requestRide" && data.role === "user") {
        const nearbyDrivers = findNearbyDrivers();
      }
    } catch (error) {}
  });
});
