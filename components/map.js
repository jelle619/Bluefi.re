'use client';
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const defaultId = "map";
const defaultWidth = "800px";
const defaultHeight = "450px";

export default function Map(props) {
  useEffect(() => {
    const L = require("leaflet/dist/leaflet.js");
    const data = require("/public/json/geocaching/finds.json")
    const divId = props.id || defaultId;

    // Map creation
    var map = L.map(divId, {
      attributionControl: false,
      center: [51.690486599927794, 5.296194152088851],
      zoom: 7
    });

    // Set tile provider
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19
    }).addTo(map);

    // Set attribution
    L.control
      .attribution()
      .setPrefix("")
      .addAttribution(
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      )
      .addTo(map);

    // Set default icon

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: iconRetina["src"],
      iconUrl: iconMarker["src"],
      shadowUrl: iconShadow["src"],
    });

    // Set custom icon

    // var icon = L.icon({
    //   iconUrl: 'https://i.postimg.cc/1Xb4rsv2/icon-blue.png',
    //   iconSize:     [38, 38], // size of the icon
    //   iconAnchor:   [19, 34], // point of the icon which will correspond to marker's location
    //   popupAnchor:  [0, -38] // point from which the popup should open relative to the iconAnchor
    // });

    // Data
    async function addMarkers() {

      var results = data["results"];

      for (let cache in results) {
        // Add marker
        L.marker([
          results[cache]["postedCoordinates"]["latitude"],
          results[cache]["postedCoordinates"]["longitude"]
        ])
          .addTo(map)

          // Add popup
          .bindPopup(
            "<small>" +
            "<a href='https://coord.info/" +
            results[cache]["code"] +
            "' target='_blank'>" +
            results[cache]["code"] +
            "</a>" +
            "</small><br><b>" +
            results[cache]["name"] +
            "</b>"
          );
      }
    }

    addMarkers();

  });
  return (
    <div className="map" style={{ width: props.width || defaultWidth, height: props.height || defaultHeight }} id={props.id || defaultId}></div>
  );
}