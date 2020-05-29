/*global kakao*/
import React, { useEffect, useState } from "react";
import $ from "jquery";
import "../css/map.css";
import axios from "axios";

const Map3 = () => {
  const [gu, setGu] = useState("");
  const [message, setMessage] = useState("");
  const [dong, setDong] = useState("개포동");
  const [list, setList] = useState(false);
  const [fa, setFa] = useState("");
  const onClick2 = (e) => {
    setList(true);
  };
  const seloption = (e) => {
    setFa(e.target.value);
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=5f5809befc934f9413253553bc2551f6&autoload=false&libraries=services,clusterer,drawing";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        // var el = document.getElementById("map");
        var jsondata;
        var mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new kakao.maps.LatLng(
              window.sessionStorage.getItem("positionx"),
              window.sessionStorage.getItem("positiony")
            ), // 지도의 중심좌표
            level: window.sessionStorage.getItem("level"), // 지도의 확대 레벨
          };

        var map = new kakao.maps.Map(mapContainer, mapOption);
        var customOverlay = new kakao.maps.CustomOverlay();
        var clusterer = new kakao.maps.MarkerClusterer({
          map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
          averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel: 5, // 클러스터 할 최소 지도 레벨
          disableClickZoom: true, // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
        });

        // 데이터를 가져오기 위해 jQuery를 사용합니다
        // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
        axios
          .get("/json/seoulCafe.json")
          .then((data) => {
            jsondata = data.data.positions;

            var markers = $(data.data.positions).map(function (i, position) {
                console.log(window.sessionStorage.getItem("dong"))
              if (window.sessionStorage.getItem("dong") === position.dong) {
                return new kakao.maps.Marker({
                  position: new kakao.maps.LatLng(position.x, position.y),
                });
              }
            });

            // 클러스터러에 마커들을 추가합니다
            clusterer.addMarkers(markers);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    };
  }, []);

  const OnSubmit = (e) => {
    e.preventDefault();
    const post = {
      gu: window.sessionStorage.getItem("gu"),
      dong: dong,
    };
    fetch("/graph", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.text())
      .then((message) => {
        window.sessionStorage.setItem("message", message);
        window.location.replace("/graph1");
      });
  };
  return (
    <>
      <div className="map" id="map"></div>

      <form onSubmit={OnSubmit}>
        <input type="submit" value="전송"></input>
      </form>
      
    </>
  );
};

export default Map3;
